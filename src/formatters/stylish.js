const goodView = (obj) => {
  const first = JSON.stringify(obj);
  return JSON.stringify(first, null, 4);
};
export default goodView;
