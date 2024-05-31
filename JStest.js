// Step 1: Create a variable to hold your NFTs
let nfts = [];

// Step 2: Create a function that mints NFTs
function mintNFT(name, artist, description, rarity) {
    // Check if all required parameters are provided
    if (!name || !artist || !description || !rarity) {
        console.log("Error: Missing metadata for the NFT.");
        return;
    }

    // Create an NFT object with metadata
    const nft = {
        name: name,
        artist: artist,
        description: description,
        rarity: rarity,
        mintedAt: new Date().toISOString() // Add a timestamp for when the NFT was minted
    };

    // Store the NFT in the array
    nfts.push(nft);
    console.log(`NFT "${name}" minted successfully.`);
}

// Step 3: Create a function that lists all NFTs
function listNFTs() {
    if (nfts.length === 0) {
        console.log("No NFTs have been minted yet.");
        return;
    }

    console.log("Listing all NFTs:");
    for (let i = 0; i < nfts.length; i++) {
        console.log(`NFT #${i + 1}`);
        console.log(`  Name: ${nfts[i].name}`);
        console.log(`  Artist: ${nfts[i].artist}`);
        console.log(`  Description: ${nfts[i].description}`);
        console.log(`  Rarity: ${nfts[i].rarity}`);
        console.log(`  Minted At: ${nfts[i].mintedAt}`);
        console.log("-----------------------------");
    }
}

// Step 4: Create a function that returns the total supply of NFTs
function getTotalSupply() {
    return nfts.length;
}

// Step 5: Additional function to get a specific NFT by index
function getNFT(index) {
    if (index < 0 || index >= nfts.length) {
        console.log("Error: Invalid NFT index.");
        return null;
    }

    return nfts[index];
}

// Test the functions
mintNFT("CryptoPunk #1", "Larva Labs", "A unique digital punk", "Rare");
mintNFT("Bored Ape #1", "Yuga Labs", "A bored-looking ape", "Epic");
mintNFT("Art Blocks #1", "Art Blocks", "Generative art piece", "Common");

// List all NFTs
listNFTs();

// Print the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());

// Get and print a specific NFT by index
let nft = getNFT(1);
if (nft) {
    console.log("Retrieved NFT:");
    console.log(`  Name: ${nft.name}`);
    console.log(`  Artist: ${nft.artist}`);
    console.log(`  Description: ${nft.description}`);
    console.log(`  Rarity: ${nft.rarity}`);
    console.log(`  Minted At: ${nft.mintedAt}`);
}
