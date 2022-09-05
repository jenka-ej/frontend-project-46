const difference = (obj1, obj2) => {
  const result = [];
  for (const key1 in obj1) {
    result.push(key1);
  }
  for (const key2 in obj2) {
    result.push(key2);
  }
  const sort_result = result.sort();
  const final_result = sort_result.filter((item, index) => sort_result.indexOf(item) === index);
  const differenceobj = {};
  final_result.map((uniquekey) => {
    if (obj1.hasOwnProperty(uniquekey) && obj2.hasOwnProperty(uniquekey)) {
      if (obj1[uniquekey] === obj2[uniquekey]) {
        differenceobj[`    ${uniquekey}`] = obj1[uniquekey];
      } else {
        differenceobj[`  - ${uniquekey}`] = obj1[uniquekey];
        differenceobj[`  + ${uniquekey}`] = obj2[uniquekey];
      }
    } else if (obj1.hasOwnProperty(uniquekey)) {
      differenceobj[`  - ${uniquekey}`] = obj1[uniquekey];
    } else {
      differenceobj[`  + ${uniquekey}`] = obj2[uniquekey];
    }
  });
  const strdiff = JSON.stringify(differenceobj);
  const strdiff_result = strdiff.split(',').join('\n').split('"').join('').split(':').join(': ').split('{').join('{\n').split('}').join('\n}');
  return strdiff_result;
};
