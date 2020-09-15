export const template = `{{#imports}}
import { {{commaSeparatedComponents}} } from '{{{packagePath}}}'
{{/imports}}

@ScheduledCommand({
  // Specify cron scheduled params here. By default scheduledCommand will be triggered every 30 minutes
  minute: '0/30',
})
export class {{{ name }}} {
  public static async handle(): Promise<void> {
    /* YOUR CODE HERE */
  }
}
`
