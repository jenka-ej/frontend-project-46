const compareData = (file1, file2) => {
    const result = [];
    for (const key1 in file1) {
      result.push(key1);
    }
    for (const key2 in file2) {
      result.push(key2);
    }
    const sort = result.sort();
    const final = sort.filter((item, index) => sort.indexOf(item) === index);
    const diffobj = {};
    final.map((key) => {
      if (file1.hasOwnProperty(key) && file2.hasOwnProperty(key)) {
        if (file1[key] === file2[key]) {
          diffobj[`    ${key}`] = file1[key];
        } else {
          diffobj[`  - ${key}`] = file1[key];
	  diffobj[`  + ${key}`] = file2[key];
        }
      } else if (file1.hasOwnProperty(key)) {
        diffobj[`  - ${key}`] = file1[key];
      } else {
        diffobj[`  + ${key}`] = file2[key];
      }
    });
    const strdiff = JSON.stringify(diffobj);
    const strdiff_result = strdiff.split(',').join("\n").split('"').join('').split(':').join(': ').split('{').join('{\n').split('}').join('\n}');
    return strdiff_result;
};
export default compareData;
