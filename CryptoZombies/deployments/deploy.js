const { ethers } = require('hardhat');

async function main(){
    const [deployer] = ethers.getSigners();
    console.log("deploying the contract using the account address:", deployer.address);
    const ZombieFactory = await ethers.deployContract('ZombieFactory');
    console.log("Contract address:", ZombieFactory.getAddress());
}

main().then(()=>exit(0))
.catch((e)=>{
    console.log(e);
    exit(1);
})