import goodView from './formatters/stylish.js';
const compareData = (obj1, obj2) => {
  const getChildren = (obj) => Object.keys(obj);
  const childrenObj1 = getChildren(obj1);
  const childrenObj2 = getChildren(obj2);
  const childrenMass = childrenObj1.concat(childrenObj2);
  const final = childrenMass.filter((child, index) => childrenMass.indexOf(child) === index).sort();
  const cb = (acc, key) => {
    const obj1HasKey = Object.getOwnPropertyDescriptor(obj1, key);
    const obj2HasKey = Object.getOwnPropertyDescriptor(obj2, key);
    const value1 = obj1[key];
    const value2 = obj2[key];
    const obj1KeyIsObject = (typeof value1 === 'object' && value1 !== null && !Array.isArray(value1));
    const obj2KeyIsObject = (typeof value2 === 'object' && value2 !== null && !Array.isArray(value2));
    if (obj1HasKey && obj2HasKey && obj1KeyIsObject && obj2KeyIsObject) {
      acc[`${key}`] = compareData(value1, value2);
      return acc;
    } if (obj1HasKey && obj2HasKey && obj1KeyIsObject && !obj2KeyIsObject) {
      acc[`- ${key}`] = value1;
      acc[`+ ${key}`] = value2;
      return acc;
    } if (obj1HasKey && obj2HasKey && !obj1KeyIsObject && obj2KeyIsObject) {
      acc[`- ${key}`] = value1;
      acc[`+ ${key}`] = value2;
      return acc;
    } if (obj1HasKey && !obj2HasKey && obj1KeyIsObject) {
      acc[`- ${key}`] = value1;
      return acc;
    } if (!obj1HasKey && obj2HasKey && obj2KeyIsObject) {
      acc[`+ ${key}`] = value2;
      return acc;
    } if (obj1HasKey && obj2HasKey) {
      if (value1 === value2) {
        acc[`${key}`] = value1;
        return acc;
      }
      acc[`- ${key}`] = value1;
      acc[`+ ${key}`] = value2;
      return acc;
    } if (obj1HasKey && !obj2HasKey) {
      acc[`- ${key}`] = value1;
      return acc;
    }
    acc[`+ ${key}`] = value2;
    return acc;
  };
  const finalresult = final.reduce(cb, {});
  return goodView(finalresult);
};
export default compareData;
