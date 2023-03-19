require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
  },
}; // because I have accomplished my homework 2 using the pragme 0.7.0 version
// In the terminal the following command executed first: 
// npx hardhat compile
require("hardhat-deploy");
require("hardhat-deploy-ethers");