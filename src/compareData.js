const compareData = (file1, file2) => {
  const result = [];
  result.push(Object.keys(file1), Object.keys(file2));
  const sort = result.flat(1).sort();
  const final = sort.filter((item, index) => sort.indexOf(item) === index);
  const diffobj = {};
  for (let i = 0; i < final.length; i += 1) {
    const key = final[i];
    const firstObjectHasKey = Object.getOwnPropertyDescriptor(file1, key);
    const secondObjectHasKey = Object.getOwnPropertyDescriptor(file2, key);
    if (firstObjectHasKey && secondObjectHasKey) {
      if (file1[key] === file2[key]) {
        diffobj[`    ${key}`] = file1[key];
      } else {
        diffobj[`  - ${key}`] = file1[key];
        diffobj[`  + ${key}`] = file2[key];
      }
    } else if (firstObjectHasKey) {
      diffobj[`  - ${key}`] = file1[key];
    } else {
      diffobj[`  + ${key}`] = file2[key];
    }
  }
  const strdiff = JSON.stringify(diffobj);
  const strdiffResult = strdiff.split(',').join('\n').split('"').join('')
    .split(':')
    .join(': ')
    .split('{')
    .join('{\n')
    .split('}')
    .join('\n}');
  return strdiffResult;
};
export default compareData;
