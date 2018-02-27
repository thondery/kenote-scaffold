/**
 * Command line entry [命令行入口]
 */
const program = require('commander')
const _ = require('lodash')
const path = require('path')
const pkg = require('./package.json')
const { Install } = require('./build/main')

const version = pkg.version
const basename = path.basename(process.env._ || process.title.replace(/^(\S+)(\s\-\s)(\S+)$/, '$3'))

program
  .version(version)

program
  .name(basename === 'node' ? 'node-scaffold' : basename)
  .usage('[command] [options]')

program
  .command('install')
  //.option('-a, --add ', 'add feature ...')
  .description('Install the scaffolding repository')
  .action( () => Install(program.args[0]) )

// Parse and fallback to help if no args
if (_.isEmpty(program.parse(process.argv).args) && process.argv.length === 2) {
  program.help()
}