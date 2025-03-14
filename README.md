# Ethers.js Smart Contract Deployment

## 📌 Overview
This project demonstrates how to deploy an Ethereum smart contract using **ethers.js**. It connects to a local Ganache blockchain and deploys a Solidity contract.

## 🚀 Getting Started
### 1️⃣ Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**
- **Ganache** (for local Ethereum blockchain)
- **Solidity Compiler (solc)**
- **Metamask** (for interacting with deployed contracts)

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/TejaKaranam792/main.git
cd ether-simple-storage
```

### 3️⃣ Install Dependencies
```bash
npm install ethers dotenv fs-extra
```

### 4️⃣ Compile Smart Contract
```bash
npx solc --abi --bin -o ./build/contracts SimpleStorage.sol
```

### 5️⃣ Start Ganache
If using Ganache CLI:
```bash
ganache-cli --port 7545
```
If using Ganache GUI, make sure it's running on **port 7545**.

### 6️⃣ Deploy the Contract
```bash
node deploy.js
```

## 📄 Project Structure
```
📂 ether-simple-storage
 ├── 📂 build              # Compiled ABI & Binary
 ├── 📂 contracts          # Solidity contracts
 │   ├── SimpleStorage.sol # Sample contract
 ├── deploy.js            # Deployment script
 ├── .env                 # Environment variables
 ├── package.json         # Project dependencies
 ├── README.md            # Documentation
```

## 🔧 Environment Variables (.env)
Create a `.env` file with:
```
PRIVATE_KEY=your_private_key_here
```
> **Note:** Never expose your private key in public repositories.

## 🛠️ Troubleshooting
- If you encounter `checkProvider(...).getTransactionCount is not a function`, ensure you're using **ethers v5**:
  ```bash
  npm install ethers@5
  ```
- Ensure Ganache is running before deploying.

## 🤝 Contributing
Feel free to open an issue or submit a pull request!

## 📜 License
This project is licensed under the MIT License.

