os-changelog
============

Changelog generator for Ordrestyring

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/os-changelog.svg)](https://npmjs.org/package/os-changelog)
[![Downloads/week](https://img.shields.io/npm/dw/os-changelog.svg)](https://npmjs.org/package/os-changelog)
[![License](https://img.shields.io/npm/l/os-changelog.svg)](https://github.com/Projects/os-changelog/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g os-changelog
$ os-changelog COMMAND
running command...
$ os-changelog (-v|--version|version)
os-changelog/0.0.0 darwin-x64 node-v14.8.0
$ os-changelog --help [COMMAND]
USAGE
  $ os-changelog COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`os-changelog help [COMMAND]`](#os-changelog-help-command)
* [`os-changelog mr PROJECT`](#os-changelog-mr-project)

## `os-changelog help [COMMAND]`

display help for os-changelog

```
USAGE
  $ os-changelog help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `os-changelog mr PROJECT`

Get a list of merge reuests that have been merges closed since latest release

```
USAGE
  $ os-changelog mr PROJECT

OPTIONS
  -h, --help           show CLI help
  -o, --output=md|raw  [default: raw]
  -t, --target=target  [default: master]

EXAMPLES
  mr api
  mr api --target dev
  mr api --target dev --output md
```

_See code: [src/commands/mr.ts](https://github.com/Projects/os-changelog/blob/v0.0.0/src/commands/mr.ts)_
<!-- commandsstop -->
