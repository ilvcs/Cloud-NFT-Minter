// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// Ganache: 0x7a29d449836932fAa97177e1632C96c80e65dcd4
// Shine: 0x5A926A85e3369Af3F585DfCf028d2e341E36f617
// Mumbai: 0x477788a1EB707508d7c0bDB7b3b310A5B1ccD198
const hre = require("hardhat");

async function main() {
 
  const ERC721Minter = await hre.ethers.getContractFactory("UserAwards");
  const erc721Minter = await ERC721Minter.deploy();
  await erc721Minter.deployed();

  console.log(
    `Contract deployed to ${erc721Minter.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
