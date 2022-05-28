const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Token contract", function () {
  // it("Deployment should register plot to an address", async function () {
  //   const Register = await ethers.getContractFactory("Register");

  //   const hardhatRegisterContract = await Register.deploy();
  //   const obj = {
  //       owner: '0xE7Ff2487e543C40A736fc231feb5ec6Cb5CbF1c5',
  //       askingPrice: 4
  //   }
  //   const ownerBalance = await hardhatRegisterContract.registerPlot('0xE7Ff2487e543C40A736fc231feb5ec6Cb5CbF1c5', 1, 4);
  //   const [owner, askingPrice] = await hardhatRegisterContract.checkRegistration(1);
  //   expect(owner).to.equal(obj.owner);
  //   expect(askingPrice).to.equal(obj.askingPrice);
  // });

  // it("Deployment should transfer ownershipt to a new address", async function () {
  //   const Register = await ethers.getContractFactory("Register");

  //   const hardhatRegisterContract = await Register.deploy();
  //   const obj = {
  //       owner: '0x4b94D82f48758EF3a3A8DF675bc27C308b0f581A',
  //       askingPrice: 4
  //   }
  //   const ownerBalance = await hardhatRegisterContract.transferOwnership('0x4b94D82f48758EF3a3A8DF675bc27C308b0f581A', 1);
  //   const [owner] = await hardhatRegisterContract.checkRegistration(1);
  //   expect(owner).to.equal(obj.owner);
  // });

  // it("Deployment should change the asking price for the plot", async function () {
  //   const Register = await ethers.getContractFactory("Register");

  //   const hardhatRegisterContract = await Register.deploy();
  //   const ownerBalance = await hardhatRegisterContract.changeAskingPrice(1, 5);
  //   const [owner, askingPrice] = await hardhatRegisterContract.checkRegistration(1);
  //   expect(askingPrice).to.equal(5);
  // });

   it("Deployment should change the asking price for the plot", async function () {
    const Register = await ethers.getContractFactory("Register");
    const box = await upgrades.deployProxy(Register,[42], { initializer: 'setValue' })
    expect(await box.retrieve()).to.equal(BigNumber.from('42'))
  }).timeout(200000);
});

   //Implementation address => 0x86aB9C6D9c620f37E99724585dDbae9d3a1aF94a
//proxy address => 0x2a3315b626e879c28412f770ef5d298e201b4c44