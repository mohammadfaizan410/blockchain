# Blockchain Project README

* This repository contains blockchain projects developed using two popular frameworks: Hardhat and Truffle. Below are the instructions for setting up and running these projects locally.

## Prerequisites :
### Install Hardhat globally:
npm install -g hardhat

### Download Ganache from their official website


### Install Hardhat Toolbox:
npm install --save-dev @nomiclabs/hardhat-toolbox

## For Truffle Projects
### Install Truffle globally:
npm install -g truffle


# Setting up the truffle project
### Navigate to root folder
* cd truffle_project_root
### Compile and migrate the smart contracts:
* truffle compile
* truffle migrate --network <networkName>
* In the frontend folder, copy the ABI from build/contracts/contract_name.json. Store the ABI and contract address in a secure .env file.

### Install frontend dependencies:
* cd frontend
* npm install
#### Run the frontend:
nodemon index.js


## For Hardhat Projects
### Navigate to the root folder:
* cd hardhat_project_root
### Install dependencies:
* npm install

### Compile and deploy the smart contracts:
* npx hardhat compile
* npx hardhat run path_to_script/script.js
* In the frontend folder, copy the ABI from artifacts/contracts/contract_name.json. Store the ABI and contract address in a secure .env file.

### Install frontend dependencies:
* cd frontend
* npm install
#### Run the frontend:
*nodemon your_frontend_script.js


## Configuration for Testnets
For both Hardhat and Truffle projects, please configure the network settings in the respective hardhat.config.js or truffle-config.js files. Refer to the following documentation for more information:

Truffle Network Configuration: Truffle Networks
Hardhat Network Configuration: Hardhat Config
