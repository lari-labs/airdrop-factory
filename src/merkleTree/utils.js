const sanitizeAddress = (address = '0x000') => address.replace(/^0x/, '');
const getLength = ({ length } = []) => length;
const head = ([x, ...xs] = []) => x;
const tail = ([x, ...xs]) => xs;
const isEven = x => (x % 2 === 0 ? true : false);
const compose =
  (...fns) =>
  initialValue =>
    fns.reduceRight((acc, fn) => fn(acc), initialValue);

const mapper = fn => array => array.map(fn);

const sanitizeAddressArray = mapper(sanitizeAddress);

export {
  compose,
  getLength,
  head,
  isEven,
  mapper,
  tail,
  sanitizeAddress,
  sanitizeAddressArray,
};
