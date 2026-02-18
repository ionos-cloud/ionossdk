import {Command} from '@oclif/core'

export default class Version extends Command {
  static description = 'Print the version of ionossdk'

  async run() {
    this.log(`ionossdk ${this.config.version}`)
  }
}
