const ethers = require("ethers");  // ✅ Keep only this line
const fs = require("fs-extra");
require("dotenv").config(); // Load environment variables

async function main() {
  try {
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");

    const privateKey = process.env.PRIVATE_KEY || "0x6e6e82a016bb5d002b5bc17098906c70d8df3c9caf63baf4c7c6ed714b50f675";
    const wallet = new ethers.Wallet(privateKey, provider);

    const abiPath = "./build/contracts_SimpleStorage_sol_SimpleStorage.abi";
    const binaryPath = "./build/contracts_SimpleStorage_sol_SimpleStorage.bin";

    if (!fs.existsSync(abiPath) || !fs.existsSync(binaryPath)) {
      throw new Error("ABI or Binary file not found. Make sure to compile the contract first.");
    }

    const abi = JSON.parse(fs.readFileSync(abiPath, "utf8"));
    const binary = fs.readFileSync(binaryPath, "utf8").trim();

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

    console.log("Deploying contract...");

    const contract = await contractFactory.deploy({ gasLimit: 5000000 });
    await contract.waitForDeployment();

    console.log("Contract deployed successfully!");
    console.log("Contract Address:", await contract.getAddress()); 
  } catch (error) {
    console.error("Error deploying contract:", error);
  }
}

main();
