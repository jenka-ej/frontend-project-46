import fs from 'fs';
import path from 'path';
import compareData from './compareData.js';

const getExtension = (filepath) => path.extname(filepath);
const getAbsolutePath = (filepath) => path.resolve(filepath);
const readFileSync = (filepath) => fs.readFileSync(filepath, 'utf-8');

const genDiff = (fpath1, fpath2) => {
  const ext1 = getExtension(fpath1);
  const ext2 = getExtension(fpath2);

  const parsedFile1 = JSON.parse(readFileSync(getAbsolutePath(fpath1)), ext1);
  const parsedFile2 = JSON.parse(readFileSync(getAbsolutePath(fpath2)), ext2);

  console.log(goodView(compareData(parsedFile1, parsedFile2)));
};

export default genDiff;
