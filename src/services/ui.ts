import runConfig from '../models/run-config'
import {ux} from '@oclif/core'
import * as json from './json'
import chalk from 'chalk'

function warning(msg: string) {
  if (process.stderr.isTTY) {
    process.stderr.write(`${chalk.yellowBright('! WARNING:')} ${chalk.yellow(msg)}\n`)
  } else {
    process.stderr.write(`! WARNING: ${msg}\n`)
  }
}

function error(msg: string) {
  if (process.stderr.isTTY) {
    process.stderr.write(`${chalk.red('! ERROR:')} ${chalk.redBright(msg)}\n`)
  } else {
    process.stderr.write(`! ERROR: ${msg}\n`)
  }
}

function info(msg: string) {
  ux.info(`❯ ${msg}`)
}

function debug(msg: string) {
  if (runConfig.debug) {
    if (process.stderr.isTTY) {
      process.stderr.write(`${chalk.gray('⇢ (debug)')} ${chalk.gray(msg)}\n`)
    } else {
      process.stderr.write(`⇢ (debug) ${msg}\n`)
    }
  }
}

function success(msg: string) {
  process.stdout.write(chalk.greenBright(`✔ ${msg}\n`))
}

function eol() {
  process.stdout.write('\n')
}

function print(data: any) {
  let str = ''
  if (typeof data === 'object') {
    str = json.serialize(data)
  } else {
    str = data
  }

  process.stdout.write(str)
}

function printPatch(patch: string) {
  for (const line of patch.split('\n')) {
    if (line.startsWith('- ')) {
      print(chalk.redBright(line) + '\n')
    } else if (line.startsWith('+ ')) {
      print(chalk.greenBright(line) + '\n')
    } else {
      print(line + '\n')
    }
  }
}

export default {
  debug,
  info,
  warning,
  error,
  success,
  eol,
  print,
  printPatch
}
