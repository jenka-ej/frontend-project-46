const goodView = (obj) => {
  const objToStr = JSON.stringify(obj, null, 4);
  const goodResult = objToStr.split('"').join('').split(',').join('')
    .split('  + ')
    .join('+ ')
    .split('  - ')
    .join('- ');
  return goodResult;
};
export default goodView;
