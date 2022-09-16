import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLtoPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLtoPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), utf-8);

test('test to compare the actual and desired results', () => {
  const expected = readFile('test1.txt');
  const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  expect(actual).toBe(expected);
});
	
