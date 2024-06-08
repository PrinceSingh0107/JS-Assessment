const { ethers } = require('ethers');

// You need to provide the ABI and Bytecode of your compiled contract
const abi = [
    "function name() public view returns (string)",
    "function symbol() public view returns (string)",
    "function totalSupply() public view returns (uint256)",
    "function balances(address) public view returns (uint256)",
    "function mint(address _to, uint256 _value) public",
    "function burn(address _from, uint256 _value) public",
    "event Mint(address indexed to, uint256 value)",
    "event Burn(address indexed from, uint256 value)"
];
const bytecode = "YOUR_COMPILED_CONTRACT_BYTECODE_HERE"; // Replace with actual bytecode

// Connect to an Ethereum node
const provider = new ethers.providers.JsonRpcProvider('YOUR_ETH_NODE_URL'); // Replace with actual URL

// Create a wallet instance
const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider); // Replace with actual private key

// Create a contract factory
const contractFactory = new ethers.ContractFactory(abi, bytecode, wallet);

async function deployContract() {
    try {
        // Deploy the contract
        const contract = await contractFactory.deploy();
        await contract.deployed();
        console.log(`Contract deployed at address: ${contract.address}`);

        return contract;
    } catch (error) {
        console.error('Error deploying contract:', error);
    }
}

async function interactWithContract(contract) {
    try {
        // Mint some tokens
        let tx = await contract.mint(wallet.address, 100);
        await tx.wait();
        console.log('Minted 100 tokens');

        // Burn some tokens
        tx = await contract.burn(wallet.address, 50);
        await tx.wait();
        console.log('Burned 50 tokens');

        // Read the total supply
        const totalSupply = await contract.totalSupply();
        console.log(`Total Supply: ${totalSupply.toString()}`);

        // Read the balance of the wallet address
        const balance = await contract.balances(wallet.address);
        console.log(`Balance: ${balance.toString()}`);
    } catch (error) {
        console.error('Error interacting with contract:', error);
    }
}

async function main() {
    const contract = await deployContract();
    if (contract) {
        await interactWithContract(contract);
    }
}

main();
