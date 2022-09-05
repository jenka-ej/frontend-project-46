#!/usr/bin/env node

import { program } from 'commander/esm.mjs';
import genDiff from '../src/index.js';

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.');

program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, options) => {
    genDiff(filepath1, filepath2, options.format);
  })
  .parse(process.argv);
