const goodView = (obj) => {
  return JSON.stringify(obj).split('{').join('{\n    ').split('"').join('').split(',').join('')
    .split('  + ')
    .join('+ ')
    .split('  - ')
    .join('- ');
};
export default goodView;
