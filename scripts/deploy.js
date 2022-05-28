const { ethers, upgrades } = require("hardhat");
async function main() {
    const HelloWorld = await ethers.getContractFactory("Register");
    const proxy = await upgrades.deployProxy(HelloWorld);
    // Start deployment, returning a promise that resolves to a contract object
    await proxy.deployed();
    console.log("Contract deployed to address:", proxy.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });

// Impl contract => 0xb54f843f130fb5aeea86157ba073b008bd2fc7fb
//Proxy contract => 0x0bDF25303615FAb8C63be721ca7E69C4Ca3A88e1