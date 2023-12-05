
const { Web3 } = require('web3');
const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_accNumber",
          "type": "address"
        }
      ],
      "name": "addAccToMapping",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_accNumber",
          "type": "address"
        }
      ],
      "name": "getUserBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "total_tokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const MY_KEY = '0ed15a1e49674f0bb70d278debab74c1';
const CONTRACT_ADDRESS = '0x4B32051EA285C3bc8D9cE7813bb500787174B304';
const NODE_URL = `https://sepolia.infura.io/v3/${MY_KEY}`
const web3 =  new Web3(NODE_URL);

const contract =  new web3.eth.Contract(abi, CONTRACT_ADDRESS);

const getBalance = async (accNumber) => {
    const balance = await contract.methods.getUserBalance(accNumber).call();
    return balance;
}

getBalance('0x89885d09427FfE168b6cd810e6CBc84f9f18A298').then(console.log);

const transfer = async (from, to, amount) => {
    const tx = await contract.methods.transfer(from, to, amount).send({from: from});
    return tx;
}
const addAccountToMapping = async (accNumber) => {
        const returnedAcc = await contract.methods.addAccToMapping(accNumber).call();
        return returnedAcc;
}

addAccountToMapping('0xEA332cEB88eA5361E728281f00BB88a8C186e880').then(console.log)