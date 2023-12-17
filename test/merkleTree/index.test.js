import test from 'ava';
import addresses from '../testData.js';
import {
  createMerkleTree,
  generateProof,
  verifyProof,
} from '../../src/merkleTree/index.js';
import { getLength, head, mapper } from '../../src/merkleTree/utils.js';

const { ADDRESS_SET_THREE: fortyAddresses } = addresses;

test('createMerkleTree', t => {
  const formatted = fortyAddresses
    .map(x => x.slice(2))
    .map(x => Buffer.from(x, 'hex')); //?

  const tree = createMerkleTree(formatted);

  t.deepEqual(
    getLength(tree),
    7,
    'given forty addresses should generate a tree with a depth of 7',
  ); //?

  const firstAddress = Buffer.from(head(fortyAddresses).slice(2), 'hex');

  const naiveSearch = tree.flatMap(x => {
    const formatted = mapper(x => x.toString('hex'))(x);
    // console.log({
    //   formatted,
    //   length: getLength(formatted),
    //   check: formatted.indexOf(firstAddress.toString('hex')),
    //   firstAddress,
    //   toString: firstAddress.toString('hex'),
    // });
    return formatted;
  }); //?
  t.deepEqual(
    naiveSearch.indexOf(firstAddress.toString('hex')) === -1,
    false,
    'should indicate that the address exists in the tree.',
  );
}); //?
