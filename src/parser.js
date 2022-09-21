import yaml from 'js-yaml';

const parser = (file, type) => {
  switch (type) {
    case 'yml':
    case 'yaml':
      return yaml.load(file);
    case 'json':
      return JSON.parse(file);
  }
};

export default parser;
