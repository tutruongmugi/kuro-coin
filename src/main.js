const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "b99a4f5b9b594f9eca86c3ffff450ab9eaa46f337fae0ac33ee58d34cb30c2ea"
);
const myWalletAddress = myKey.getPublic("hex");

let kuroCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "address2", 10);
tx1.signTransaction(myKey);
kuroCoin.addTransaction(tx1);

// console.log("Mining block 1...");
// kuroCoin.addBlock(new Block(1, "19/14/2921", { amount: 4 }));

// console.log("Mining block 2...");
// kuroCoin.addBlock(new Block(2, "19/14/2921", { amount: 10 }));

// console.log("Is block chain valid? " + kuroCoin.isChainValid());

// kuroCoin.chain[1].data = { amount: 100 };
// kuroCoin.chain[1].hash = kuroCoin.chain[1].calculateHash();
// console.log("Is block chain valid? " + kuroCoin.isChainValid());

// console.log(JSON.stringify(kuroCoin, null, 4));

// kuroCoin.createTransaction(new Transaction("address1", "address2", 100));
// kuroCoin.createTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting the miner...");
kuroCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\n Balance of Kuro is ",
  kuroCoin.getBalanceOfAddress(myWalletAddress)
);

console.log("Is block chain valid? " + kuroCoin.isChainValid());
// console.log("\n Starting the miner again...");
// kuroCoin.minePendingTransactions("kuro-address");

// console.log(
//   "\n Balance of Kuro is ",
//   kuroCoin.getBalanceOfAddress("kuro-address")
// );
