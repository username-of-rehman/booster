import { BoosterConfig, UserEnvelope, TokenVerifierConfig } from '@boostercloud/framework-types'

import * as jwksRSA from 'jwks-rsa'
import * as jwt from 'jsonwebtoken'

class TokenVerifierClient {
  private client?: jwksRSA.JwksClient
  private options?: jwt.VerifyOptions

  public constructor(private tokenVerifierConfig: TokenVerifierConfig) {
    if (this.tokenVerifierConfig.jwksUri) {
      this.client = jwksRSA({
        jwksUri: this.tokenVerifierConfig.jwksUri,
        cache: true,
        cacheMaxAge: 15 * 60 * 1000, // 15 Minutes, at least to be equal to AWS max lambda limit runtime
      })
    }

    this.options = {
      algorithms: ['RS256'],
      issuer: this.tokenVerifierConfig.issuer,
      complete: true, // To return headers, payload and other useful token information
    }
  }

  public async verify(token: string): Promise<UserEnvelope> {
    return new Promise((resolve, reject) => {
      const getKey = (header: jwt.JwtHeader, callback: jwt.SigningKeyCallback): void => {
        if (!header.kid) {
          callback(new Error('JWT kid not found'))
          return
        }
        this.client?.getSigningKey(header.kid, function (err: Error | null, key: jwksRSA.SigningKey) {
          if (err) {
            // This callback doesn't accept null so an empty string is enough here
            callback(err, '')
            return
          }
          const signingKey = key.getPublicKey()
          callback(null, signingKey)
        })
      }

      let key: jwt.Secret | jwt.GetPublicKeyOrSecret = getKey
      if (!this.client) {
        if (this.tokenVerifierConfig.publicKey) {
          key = this.tokenVerifierConfig.publicKey
        } else {
          throw new Error('Token verifier not well configured')
        }
      }

      token = this.sanitizeToken(token)
      jwt.verify(token, key, this.options, (err?: Error | null, decoded?: unknown) => {
        if (err) {
          return reject(err)
        }
        const jwtToken = decoded as any
        if (this.tokenVerifierConfig?.extraValidation) {
          try {
            this.tokenVerifierConfig?.extraValidation(jwtToken, token)
          } catch (err) {
            reject(err)
          }
        }
        return resolve(this.tokenToUserEnvelope(jwtToken))
      })
    })
  }

  private tokenToUserEnvelope(decodedToken: any): UserEnvelope {
    const payload = decodedToken.payload
    const username = payload?.email || payload?.phone_number || payload.sub
    const id = payload.sub
    const rolesClaim = this.tokenVerifierConfig.rolesClaim || 'custom:role'
    const role = payload[rolesClaim]
    const roleValue = Array.isArray(role) ? role[0] : role

    return {
      id,
      username,
      role: roleValue?.trim() ?? '',
      claims: decodedToken.payload,
      header: decodedToken.header,
    }
  }

  private sanitizeToken(token: string): string {
    return token.replace('Bearer ', '')
  }
}

export class BoosterTokenVerifier {
  private tokenVerifierClients: Array<TokenVerifierClient>

  public constructor(config: BoosterConfig) {
    this.tokenVerifierClients = config.tokenVerifiers.map(
      (tokenVerifierConfig) => new TokenVerifierClient(tokenVerifierConfig)
    )
  }

  public async verify(token: string): Promise<UserEnvelope> {
    const results = await Promise.allSettled(
      this.tokenVerifierClients.map((tokenVerifierClient) => tokenVerifierClient.verify(token))
    )
    const winner = results.find((result) => result.status === 'fulfilled')
    if (winner) return Promise.resolve((winner as PromiseFulfilledResult<UserEnvelope>).value)
    return Promise.reject(new Error(results.map((result) => (result as PromiseRejectedResult).reason).join('\n')))
  }
}
