import { GraphQLScalarType } from 'graphql/type/definition'
import {
  AnyClass,
  UserEnvelope,
  UUID,
  GraphQLOperation,
  ReadModelInterface,
  ContextEnvelope,
} from '@boostercloud/framework-types'
import { GraphQLFieldResolver, Kind } from 'graphql'
import { ReadModelPubSub } from '../pub-sub/read-model-pub-sub'
import { PropertyMetadata, TypeMetadata } from 'metadata-booster'

export type TargetTypesMap = Record<string, TargetTypeMetadata>
export interface TargetTypeMetadata {
  class: AnyClass
  properties: Array<PropertyMetadata>
  methods: Array<PropertyMetadata>
}

export type ResolverBuilder = (objectClass: AnyClass) => GraphQLFieldResolver<unknown, GraphQLResolverContext, any>

export interface GraphQLResolverContext {
  connectionID?: string
  operation: GraphQLOperation
  requestID: UUID
  user?: UserEnvelope
  storeSubscriptions: boolean
  pubSub: ReadModelPubSub<ReadModelInterface>
  context?: ContextEnvelope
}

export const graphQLWebsocketSubprotocolHeaders = {
  'Sec-WebSocket-Protocol': 'graphql-ws',
}

export const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.toJSON()
  },
  parseValue(value) {
    return new Date(value)
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value)
    }
    return null
  },
})

export function isExternalType(typeMetadata: Pick<TypeMetadata, 'importPath'>): boolean {
  return !!typeMetadata.importPath && !typeMetadata.importPath.startsWith('.')
}
