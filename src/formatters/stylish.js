const goodView = (obj) => {
  return JSON.stringify(obj, null, 4).split('"').join('').split(',').join('')
    .split('  + ')
    .join('+ ')
    .split('  - ')
    .join('- ');
};
export default goodView;
