import fs from 'fs';
import path from 'path';
import compareData from './compareData.js';
import getFormat from './formatters/index.js';
import parser from './parser.js';

const getExtension = (filepath) => path.extname(filepath);
const getAbsolutePath = (filepath) => path.resolve(filepath);
const readFileSync = (filepath) => fs.readFileSync(filepath, 'utf-8');

const genDiff = (fpath1, fpath2, formatName = 'stylish') => {
  const ext1 = getExtension(fpath1);
  const ext2 = getExtension(fpath2);

  const parsedFile1 = parser(readFileSync(getAbsolutePath(fpath1)), ext1);
  const parsedFile2 = parser(readFileSync(getAbsolutePath(fpath2)), ext2);

  const differences = getFormat(compareData(parsedFile1, parsedFile2), formatName);
  return differences;
};

export default genDiff;
