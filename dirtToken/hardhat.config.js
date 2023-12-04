
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */

const MY_KEY = '0ed15a1e49674f0bb70d278debab74c1';
const MY_ACCOUNT_PRIVATE_KEY = '01d6ab5650f4122a02b1530e29c5cbe3f10eadc29ab7eb0de5fa5a515add6e58';
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url : `https://sepolia.infura.io/v3/${MY_KEY}`,
      accounts: [MY_ACCOUNT_PRIVATE_KEY]
    }
  }
};
