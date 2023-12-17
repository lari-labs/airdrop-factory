import test from 'ava';
import TEST_DATA from '../testData.js';
import {
  sanitizeAddress,
  head,
  tail,
  isEven,
  getLength,
} from '../../src/merkleTree/utils.js';

const { ADDRESS_SET_THREE: addresses } = TEST_DATA;
test('tree utility functions', async t => {
  const first = head(addresses);

  t.deepEqual(
    first === addresses[0],
    true,
    'head should return the first item in an array.',
  );

  const rest = tail(addresses);
  t.deepEqual(
    rest.length === addresses.length - 1,
    true,
    'tail() should return an array that no longer has the first value.',
  );

  t.deepEqual(
    sanitizeAddress(first) === first.slice(2),
    true,
    'sanitizeAddress() should remove 0x from the address string',
  );

  t.deepEqual(
    isEven(4) === true,
    true,
    'isEven() given an even number should return true.',
  );

  t.deepEqual(
    isEven(3) !== true,
    true,
    'isEven() given an odd number should return false.',
  );

  t.deepEqual(
    getLength(addresses) === 40,
    true,
    'getLength() given an array of data should return the correct length.',
  );
});
