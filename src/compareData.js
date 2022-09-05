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
  final.map((key) => {
    if (file1.hasOwnProperty(key) && file2.hasOwnProperty(key)) {
      if (file1[key] === file2[key]) {
        return `    ${key}: ${file1[key]}`;
      } else {
        return `  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`;
      }
    } else if (file1.hasOwnProperty(key)) {
      return `  - ${key}: ${file1[key]}`;
    } else {
      return `  + ${key}: ${file2[key]}`;
    }
  }
};
export default compareData;
