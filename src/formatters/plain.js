import {file1, file2, diff} from './genDiffRecursion.js';

const result = [];
const plain = (obj, path) => {
    const getChildren = (obj) => Object.keys(obj);
    const childrenObj = getChildren(obj);
    childrenObj.map((key) => {
        const value = obj[key];
        const objKeyIsObject = (typeof value === 'object' && value !== null && !Array.isArray(value));
        if (objKeyIsObject) {
            if (key[0] === '+' || key[0] === '-') {
                if (path === '') {
                    const sign = key.slice(0, 1);
                    const signKey = key.slice(2, key.length);
                    return result.push([sign, `${signKey}`, '[complex value]']);
                } else {
                    const sign = key.slice(0, 1);
                    const signKey = key.slice(2, key.length);
                    return result.push([sign, `${path}.${signKey}`, '[complex value]']);
                }
            } else {
                if (path === '') {
                    return plain(value, `${key}`);
                } else {
                    return plain(value, `${path}.${key}`);
                }
            }
        } else {
            if (key[0] === '+' || key[0] === '-') {
                if (path === '') {
                    const sign = key.slice(0, 1);
                    const signKey = key.slice(2, key.length);
                    return result.push([sign, `${signKey}`, value]);
                } else {
                    const sign = key.slice(0, 1);
                    const signKey = key.slice(2, key.length);
                    return result.push([sign, `${path}.${signKey}`, value]);
                }
            } else {
                return;
            }
        }
    });
};
plain(diff(file1, file2), '');
const finalResult = [];
const plainResult = (mass) => {
    for (let i = 0; i < mass.length; i += 1) {
        const [signI, keyI, valueI] = mass[i];
        if (i + 1 < mass.length) {
            const [signJ, keyJ, valueJ] = mass[i + 1];
            if (keyI === keyJ) {
                finalResult.push([`${signI}${signJ}`, keyI, valueI, valueJ]);
                i = i + 1;
            } else {
                finalResult.push([signI, keyI, valueI]);
            }
        } else {
            finalResult.push([signI, keyI, valueI]);
        }
    }
};
plainResult(result);
const text = (mass) => {
    return mass.map((massive) => {
        if (massive.length === 3) {
            const [sign, key, value] = massive;
            if (sign === '-') {
                return `Property ${key} was removed`;
            } else {
                return `Property ${key} was added with value: ${value}`;
            }
        } else {
            const [sign, key, value1, value2] = massive;
            return `Property ${key} was updated. From ${value1} to ${value2}`;
        }
    })
};
console.log(text(finalResult));
