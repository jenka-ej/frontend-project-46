const goodView = (obj) => {
  const objToStr = JSON.stringify(obj, null, '\n    ');
  const goodResult = objToStr.split('"').join('').split(',').join('')
    .split('  + ')
    .join('+ ')
    .split('  - ')
    .join('- ');
  return goodResult;
};
export default goodView;
