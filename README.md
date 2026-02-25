@ionos-cloud/ionossdk
===================

Ionos Cloud SDK generator

[![Version](https://img.shields.io/npm/v/@ionos-cloud/ionossdk.svg)](https://npmjs.org/package/@ionos-cloud/ionossdk)
[![License](https://img.shields.io/npm/l/@ionos-cloud/ionossdk.svg)](https://github.com/ionos-cloud/ionossdk/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @ionos-cloud/ionossdk
$ ionossdk COMMAND
running command...
$ ionossdk (--version)
@ionos-cloud/ionossdk/1.3.0 linux-x64 node-v24.7.0
$ ionossdk --help [COMMAND]
USAGE
  $ ionossdk COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ionossdk cache OPERATION`](#ionossdk-cache-operation)
* [`ionossdk env`](#ionossdk-env)
* [`ionossdk generate`](#ionossdk-generate)
* [`ionossdk help [COMMAND]`](#ionossdk-help-command)
* [`ionossdk version`](#ionossdk-version)

## `ionossdk cache OPERATION`

cache management

```
USAGE
  $ ionossdk cache OPERATION [-d]

ARGUMENTS
  OPERATION  (clear|info) cache operation to perform

FLAGS
  -d, --debug  show debug information

DESCRIPTION
  cache management
```

_See code: [src/commands/cache.ts](https://github.com/ionos-cloud/ionossdk/blob/v1.3.0/src/commands/cache.ts)_

## `ionossdk env`

Build ENV variables from an assets bundle

```
USAGE
  $ ionossdk env -n <value> -a <value> [-d] [-s <value>] [-v <value>] [-p <value>] [-i <value>] [-o
    <value>]

FLAGS
  -a, --assets-dir=<value>  (required) sdk assets directory (templates, scripts etc)
  -d, --debug               show debug information
  -i, --artifactId=<value>  [env: IONOSSDK_ARTIFACTID] artifact id, can be set from env variable IONOSSDK_ARTIFACTID
  -n, --name=<value>        (required) sdk to build
  -o, --output-dir=<value>  output dir
  -p, --package=<value>     [env: IONOSSDK_PACKAGE] sdk package name, can be set from env var IONOSSDK_PACKAGE
  -s, --spec=<value>        [default: none.json] api spec
  -v, --version=<value>     [default: 0.0.0] sdk version

DESCRIPTION
  Build ENV variables from an assets bundle
```

_See code: [src/commands/env.ts](https://github.com/ionos-cloud/ionossdk/blob/v1.3.0/src/commands/env.ts)_

## `ionossdk generate`

Generates an Ionos Cloud SDK

```
USAGE
  $ ionossdk generate -s <value> -v <value> -n <value> [-d] [-p <value>] [-i <value>] [-a <value>] [-o
    <value>] [-b] [-c]

FLAGS
  -a, --assets-dir=<value>  sdk assets directory (templates, scripts etc)
  -b, --build               also build the sdk with the build.sh script
  -c, --no-cache            don't use the cache
  -d, --debug               show debug information
  -i, --artifactId=<value>  [env: IONOSSDK_ARTIFACTID] artifact id, can be set from env variable IONOSSDK_ARTIFACTID
  -n, --name=<value>        (required) sdk to build
  -o, --output-dir=<value>  output dir
  -p, --package=<value>     [env: IONOSSDK_PACKAGE] sdk package name, can be set from env var IONOSSDK_PACKAGE
  -s, --spec=<value>        (required) api spec
  -v, --version=<value>     (required) sdk version

DESCRIPTION
  Generates an Ionos Cloud SDK
```

_See code: [src/commands/generate.ts](https://github.com/ionos-cloud/ionossdk/blob/v1.3.0/src/commands/generate.ts)_

## `ionossdk help [COMMAND]`

Display help for ionossdk.

```
USAGE
  $ ionossdk help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ionossdk.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.37/src/commands/help.ts)_

## `ionossdk version`

Print the version of ionossdk

```
USAGE
  $ ionossdk version

DESCRIPTION
  Print the version of ionossdk
```

_See code: [src/commands/version.ts](https://github.com/ionos-cloud/ionossdk/blob/v1.3.0/src/commands/version.ts)_
<!-- commandsstop -->
