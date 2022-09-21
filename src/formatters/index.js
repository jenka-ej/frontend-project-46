import goodView from './stylish.js';

const getFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return goodView(data, 0);
    default:
      throw new Error(`${format} is not supported`);
  }
};

export default getFormat;
