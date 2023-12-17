# Merkle Airdrop Dapp

Objective: Generate a merkle tree from a list of wallet addresses

### Merkle Trees Brush Up
* They are built from the bottom -> up.
* The final node in the tree is referred to as the **merkle root**.
* **Merkle Root**
  * Merkle Trees depend on the root.
  * It's the single soure of truth for checking whether or not a value exists in the tree.

## Tree Construction Process
- Airdrop Owner (person creating the campaign) provides a list of wallet addresses.
- addresses are passed into a function, `constructMerkleTree`, which sits between the client-side and the contract code. 
- Following `constructMerkleTree` execution, an instance of an "AirdropCampaign" smart contract in instantiated on agoric's blockchain. During the `startInstance` phase, the root of the tree is passed into the contracts `terms` argument

## Address Verification Process
- The `AirdropCampaign` contract exposes a method, `checkWalletAddress`, which is fixed to the tree root.
- users check if their eligible by passing in their wallet address as input to `checkWalletAddress`. This can return a boolean value that is used to display whether or not they are eligible on the UI.


### Additional context && Questions
- Now, it would just be a regular method rather than one that creates an invitation payment.
- I have viewed it as a websocket connection that sits between the contract code and the UI. (I'm not sure if this is unnecessary with the smart wallet now). Following the creation of the tree, it would then instantiate a new instance of the contract (as described above). Thoughts on this?
- Spinning up a contract for this seems incredibly simple. Where I really need guidance relates to:
    - using exo objects, making sure durability is properly set up.
    - properly handling the creatorFacet so that it is not lost.
    - confirmation / input on the approach for creating the merkle root laid out above.