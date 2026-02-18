import { Command, Flags } from '@oclif/core'
import runConfig from '../models/run-config'
import ui from '../services/ui'

export default abstract class BaseCommand extends Command {
  flags: any
  args: Record<string, any> = {}

  static baseFlags = {
    debug: Flags.boolean({char: 'd', default: false, description: 'show debug information'})
  }

  async init() {
    const {flags, args} = await this.parse(this.ctor)
    this.flags = flags
    this.args = args
    runConfig.debug = this.flags.debug
  }

  async catch(error: unknown) {
    const message = error instanceof Error ? error.message : String(error)
    const stack = error instanceof Error ? error.stack : undefined
    ui.error(message)
    if (stack) ui.debug(stack)
    this.exit(1)
  }
}
