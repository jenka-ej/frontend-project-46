const goodView = (obj) => {
  return obj.split('"').join('').split(',').join('')
    .split('  + ')
    .join('+ ')
    .split('  - ')
    .join('- ');
};
export default goodView;
