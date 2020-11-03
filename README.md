lab-changelog
============

Ever needed to generate a changlog of what has been merged since the latest tag? No need to look further. This tool will help you.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/lab-changelog.svg)](https://npmjs.org/package/lab-changelog)
[![Downloads/week](https://img.shields.io/npm/dw/lab-changelog.svg)](https://npmjs.org/package/lab-changelog)
[![License](https://img.shields.io/npm/l/lab-changelog.svg)](https://github.com/arelstone/gitlab-mr-changelog/blob/master/package.json)

# Installation
```sh-session
npm install (-g) lab-changelog
```
Under the hood we need the *host* of your gitlab installation and a *personal access token*. To inject these add them as ENV variables.

The personal access token can be created from your profile in gitlab

```sh-session
TOKEN=my_personal_access_token HOST=https://gitlab.com lab-changelog
```


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g lab-changelog
$ lab-changelog COMMAND
running command...
$ lab-changelog (-v|--version|version)
lab-changelog/0.0.0 darwin-x64 node-v14.8.0
$ lab-changelog --help [COMMAND]
USAGE
  $ lab-changelog COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lab-changelog help [COMMAND]`](#lab-changelog-help-command)
* [`lab-changelog mr PROJECT`](#lab-changelog-mr-project)

## `lab-changelog help [COMMAND]`

display help for lab-changelog

```
USAGE
  $ lab-changelog help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `lab-changelog mr PROJECT`

Get a list of merge reuests that have been merges closed since latest release

```
USAGE
  $ lab-changelog mr PROJECT

OPTIONS
  -h, --help           show CLI help
  -o, --output=md|raw  [default: raw]
  -t, --target=target  [default: master]

EXAMPLES
  mr api
  mr api --target dev
  mr api --target dev --output md
```

_See code: [src/commands/mr.ts](https://github.com/arelstone/gitlab-mr-changelog/blob/v0.0.0/src/commands/mr.ts)_
<!-- commandsstop -->


# Development
Pull requests is very welcome.

- Clone the repo
- run npm install
- To test your commands run `./bin/run`