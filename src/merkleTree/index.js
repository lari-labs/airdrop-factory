import crypto from 'crypto';
// const trace = label => value => {
const sha256 = data => crypto.createHash('sha256').update(data).digest();

const createLayers = leaves => {
  return leaves.length > 1
    ? [leaves].concat(
        createLayers(
          leaves.reduce((acc, _, i, arr) => {
            if (i % 2 === 0) {
              const hash1 = arr[i];
              const hash2 = arr[i + 1] ? arr[i + 1] : hash1;
              acc = [...acc, sha256(hash1 + hash2)];
            }
            return acc;
          }, []),
        ),
      )
    : [leaves];
};
const createMerkleTree = leaves => createLayers(leaves);

const generateProof = (tree, leaf) => {
  let index = tree[0].indexOf(leaf);
  return index === -1
    ? null
    : tree.slice(0, -1).map(layer => {
        let isRightNode = index % 2;
        index = Math.floor(index / 2);
        return layer[index + (isRightNode ? -1 : 1)];
      });
};

const verifyProof = (leaf, proof, root) =>
  proof
    .reduce((hash, node) => sha256(Buffer.concat([hash, node])), leaf)
    .equals(root);

export { createMerkleTree, generateProof, verifyProof };
