#!/usr/bin/env node

import yargs from 'yargs';
import chalk from 'chalk';
import safetyChecker from './src';
import doExport from './doExport';

const { argv } = yargs
  .option('path', {
    alias: 'p',
    description: 'Path of the folder which is going to be served',
    type: 'string',
  }).option('table', {
    alias: 't',
    description: 'Whether to show in table mode or not',
    type: 'boolean',
    default: false,
  })
  .demandOption(['path'], 'Please specify path!')
  .help()
  .alias('help', 'h');

const { path, table: isTable } = argv as { path: string, table: boolean };

safetyChecker({ src: path }).then((result) => {
  if (result) {
    doExport({ isTable, result });
    process.exit(-1);
  } else {
    console.log(chalk.green.bold('No vulnerabilities found!'));
  }
}).catch(console.error);
