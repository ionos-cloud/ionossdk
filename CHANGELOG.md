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
