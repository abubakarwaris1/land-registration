const { ethers, upgrades } = require("hardhat");
const PROXY = '0x0bdf25303615fab8c63be721ca7e69c4ca3a88e1';
async function main() {
  const FEE_DATA = {
    maxFeePerGas:ethers.utils.parseUnits('1000000', 'gwei'),
    maxPriorityFeePerGas: ethers.utils.parseUnits('5',   'gwei'),
    gas: 1000000000
  };
// const provider = new FallbackProvider([
//   { provider: process.env.API_URL},
// ])

// Wrap the provider so we can override fee data.
const provider = new ethers.providers.AlchemyProvider('ropsten', process.env.API_KEY);
provider.getFeeData = async () => FEE_DATA;
const { chainId } = await provider.getNetwork();
console.log('chainId',chainId)
;// Create the signer for the mnemonic, connected to the provider with hardcoded fee data
const signer = ethers.Wallet.fromMnemonic('shoe sorry teach urban pact hub idle remain pioneer rescue outer social').connect(provider);
console.log('something');

// Get the contract factory connected to signer so it uses hardcoded fee data
// const MyContract = await ethers.getContractFactory('MyContract', signer);

// Should now use hardcoded fee data for deployments
  // await upgrades.deployProxy(MyContract);
  const HelloWorld2 = await ethers.getContractFactory("Register2", signer);

  await upgrades.upgradeProxy(PROXY, HelloWorld2);
  console.log('upgraded...');
  // Start deployment, returning a promise that resolves to a contract object
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
