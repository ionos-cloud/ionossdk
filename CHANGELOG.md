## 1.3.0

### Internal Modernization
- Migrated from deprecated `@oclif/command` v1 to `@oclif/core` v3
- Replaced `@oclif/config` (merged into `@oclif/core`)
- Replaced `cli-ux` with `ux` from `@oclif/core`
- Updated `@oclif/plugin-help` from v3 to v6
- Replaced `@oclif/dev-cli` with `oclif` v4

### Dependency Updates
- TypeScript: `3.9` → `5.6`
- `axios`: `0.21` → `1.7`
- `yaml`: `1.10` → `2.6`
- `tslib`: `1.14` → `2.8`
- `chalk` moved from devDependencies to dependencies (runtime usage fix)

### Bug Fixes
- Fixed `chalk` being in devDependencies despite runtime usage
- Fixed `forceAbsPaths()` being Unix-only (now uses `path.isAbsolute()`)
- Fixed untyped catch blocks in `json.ts` and `run.ts`
- Removed unused `@babel/traverse` phantom dependency

### Removed
- Removed `rimraf` dependency (replaced with Node.js built-in `fs.rmSync`)
- Removed `globby` (unused)
- Removed `nyc` (meaningless with empty tests)
- Removed deprecated `mocha.opts` (replaced with `.mocharc.yml`)

### CI/CD
- Updated GitHub Actions: `actions/checkout@v4`, `actions/setup-node@v4`
- Test matrix expanded to Node.js 18, 20, 22

## 1.2.8

- Version bump for release

## 1.2.7

- allow setting `artifactId` and `packageName` from env variables `IONOSSDK_PACKAGE` and `IONOSSDK_ARTIFACTID`

## 1.2.6

- add `artifactId` optional flag to env cmd also


## 1.2.5

- add `artifactId` optional flag to be able to pass the artifactId

## 1.2.4

- add `package` optional flag to be able to pass the package along with the sdk name

## 1.2.3

- use a minimum version for chalk: `v4.1.2`
- fix ui errors

## 1.2.2

- fix `additionalProperties` functionality

## 1.2.1

- throwing an error if a variable is not found in `setup.yaml` or `openapi.yaml`
- using node 16

## 1.2.0

- `ionossdk env` command implemented to expose the env from `setup.yaml`

## v1.0.2

- fixed logging debug messages on non TTYs

## v1.0.1

- missing cli-ux dep added

## v1.0.0

- initial release
