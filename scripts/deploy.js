const { ethers } = require("hardhat");

async function main() {
  const Engine = await ethers.getContractFactory("Engine");
  const engine = await Engine.deploy();
  console.log("Engine contract deployed to:", engine.address);

  const Game = await ethers.getContractFactory("Game");
  const game = await Game.deploy();

  console.log("Game contract deployed to:", game.address);
  console.log("Contracts deployed successfully!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
