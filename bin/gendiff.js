#!/usr/bin/env node

import {Command } from 'commander/esm.mjs';

const program = new Command();

program
  .version('0.1.0')
  .description('Compare two configuration files and shows a difference.');

program.parse(process.argv);
