# Live Kink
https://gitesh-vk.github.io/NFT-Marketplace/

# NFT Marketplace

Overview

This is a simple NFT marketplace where users can mint NFTs and withdraw funds from the smart contract. The project is built using:

Frontend: React.js

Smart Contracts: Solidity

Development Framework: Hardhat

Storage: Pinata (IPFS)

Blockchain Network: Arbitrum Sepolia Testnet

# Features

Mint NFTs

Upload NFT images to Pinata (IPFS)

Withdraw funds from the contract

Connect and interact with MetaMask

Prerequisites

Make sure you have the following installed:

Node.js

MetaMask

Hardhat

Installation

Clone the repository:

git clone https://github.com/gitesh-vk/NFT-Marketplace.git
cd nft-marketplace

# Install dependencies:

npm install

Smart Contract Deployment

Compile the smart contract:

npx hardhat compile

# Deploy the contract to Arbitrum Sepolia:

npx hardhat run scripts/deploy.js --network arbitrumSepolia

Note the deployed contract address and update it in the frontend.

# Running the Frontend

Navigate to the frontend directory:

cd frontend

Start the development server:

npm start

Environment Variables

Create a .env file in the root directory and add:

REACT_APP_PINATA_API_KEY=your_pinata_api_key
REACT_APP_PINATA_SECRET_KEY=your_pinata_secret_key
REACT_APP_CONTRACT_ADDRESS=your_contract_address

Usage

Connect your wallet (MetaMask)

Mint NFTs by uploading images to Pinata

Withdraw funds if you are the contract owner

License

This project is open-source and available under the MIT License.
