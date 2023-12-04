const { ethers } = require('hardhat');

async function main(){
    const [deployer] = await ethers.getSigners();
    console.log("deploying contracts using the account", deployer.address);
    const dirt = await ethers.deployContract('Dirt');
    console.log("token address:", await dirt.getAddress());
}

main().then(()=>process.exit(0)).catch((error)=> {
    console.log(error);
    process.emit(1);
})