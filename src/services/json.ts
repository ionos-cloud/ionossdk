import { readFileSync }  from 'fs'
import ui from './ui'

const DEFAULT_JSON_INDENT = 4

export async function jsonRead(file: string): Promise<Record<any, any>> {

  ui.debug(`reading file ${file}`)
  const str = readFileSync(file).toString()
  try {
    return JSON.parse(str)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error)
    throw new Error(`error decoding json from ${file}: ${message}`)
  }

}

export function serialize(obj: Record<string, any>, indent = DEFAULT_JSON_INDENT): string {
  return JSON.stringify(obj, null, indent)
}

/* normalizes a possibly minified json by converting it to 2 spaces indented json string */
export async function normalizeFile(file: string, indent = DEFAULT_JSON_INDENT): Promise<string> {
  return serialize(await jsonRead(file), indent)
}
