import {Flags} from '@oclif/core'
import BaseCommand from '../base/base-command'
import { GenConfig } from '../models/gen-config'

import { SdkAssets } from '../services/sdk-assets'
import ui from '../services/ui'

export default class Env extends BaseCommand {
  static description = 'Build ENV variables from an assets bundle'

  static flags = {
    spec: Flags.string({char: 's', description: 'api spec', required: false, default: 'none.json'}),
    version: Flags.string({char: 'v', description: 'sdk version', required: false, default: '0.0.0'}),
    name: Flags.string({char: 'n', description: 'sdk to build', required: true}),
    package: Flags.string({char: 'p', description: 'sdk package name, can be set from env var IONOSSDK_PACKAGE', required: false, env: 'IONOSSDK_PACKAGE'}),
    artifactId: Flags.string({char: 'i', description: 'artifact id, can be set from env variable IONOSSDK_ARTIFACTID', required: false, env: 'IONOSSDK_ARTIFACTID'}),
    'assets-dir': Flags.string({char: 'a', description: 'sdk assets directory (templates, scripts etc)', required: true}),
    'output-dir': Flags.string({char: 'o', description: 'output dir', required: false, default: ''}),
  }

  async run() {

    const genConfig = new GenConfig()

    genConfig.version = this.flags.version
    genConfig.outputDir = this.flags['output-dir'] || '.'
    genConfig.assetsDir = this.flags['assets-dir'] || '.'
    genConfig.specFile = this.flags.spec
    genConfig.sdkName = this.flags.name
    genConfig.packageName = this.flags.package || 'ionoscloud'
    genConfig.artifactId = this.flags.artifactId

    /* convert to absolute paths to avoid errors when changing dirs to run commands */
    genConfig.forceAbsPaths()

    const sdkAssets = new SdkAssets(genConfig)
    const env = sdkAssets.getEnv()
    for (const envVar of Object.keys(env)) {
      ui.print(`${envVar}=${env[envVar]}\n`)
    }

  }
}
