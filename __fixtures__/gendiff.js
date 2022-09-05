const difference = (obj1, obj2) => {
  const result = [];
  for (const key1 in obj1) {
    result.push(key1);
  }
  for (const key2 in obj2) {
    result.push(key2);
  }
  const sort = result.sort();
  const final = sort.filter((item, index) => sort.indexOf(item) === index);
  final.map((key) => {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key] === obj2[key]) {
        return `    ${key}: ${obj1[key]}`;
      } else {
        return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
      }
    } else if (obj1.hasOwnProperty(key)) {
      return `  - ${key}: ${obj1[key]}`;
    } else {
      return `  + ${key}: ${obj2[key]}`;
    }
  }
};
