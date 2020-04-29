const HDWalletProvider = require('@truffle/hdwallet-provider');

//Put your mnemonic in the .env
//1) Install dotenv dependecy (npm i dotenv --save)
//2) Create .env file in the root directory 
//3) Require dotenv

require('dotenv').config();
//You should never deploy your mnemonic into production or you will lost your crypto!
const mnemonic = process.env.A_MNEMONIC;
//4) Make sure you add  togitignore the file .env 

module.exports = {
  /**
   * Networks define how you connect to your RSK client (same as Ethereum client) and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.rsk.co'),
      network_id: 30
    },

    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.testnet.rsk.co'),
      network_id: 31
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {  },

  // Configure your compilers
  compilers: {  solc: { } }
}
