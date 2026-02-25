import * as path from 'path'

export class GenConfig {
  specFile = ''
  version = ''
  assetsDir = ''
  outputDir = ''
  sdkName = ''
  build = true
  noCache = false
  packageName = 'ionoscloud'
  artifactId = ''

  public forceAbsPaths() {
    if (!path.isAbsolute(this.assetsDir)) {
      this.assetsDir = path.join(process.cwd(), this.assetsDir)
    }

    if (!path.isAbsolute(this.specFile)) {
      this.specFile = path.join(process.cwd(), this.specFile)
    }

    if (!path.isAbsolute(this.outputDir)) {
      this.outputDir = path.join(process.cwd(), this.outputDir)
    }
  }
}
