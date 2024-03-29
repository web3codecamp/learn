require("@nomicfoundation/hardhat-ethers");

const { alchemyApiKey, mnemonic } = require('./secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
      sepolia: {
        url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
        accounts: { mnemonic: mnemonic },
      },
    },
};
