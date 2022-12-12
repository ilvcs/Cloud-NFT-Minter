const functions = require("firebase-functions");
const admin = require('firebase-admin')
const ethers = require('ethers');
const {contractAddress_shine,contractAddress_ganache,contractAddress_mumbai, abi} = require('./abi.json')
require('dotenv').config()

// This is for temporary testing. Later the image might be different for each NFT.
const IMAGE_URL = 'https://img.freepik.com/premium-vector/cute-cartoon-unicorn-pegasus-with-rainbow-mane_116089-138.jpg?w=2000'

exports.awardToken = functions.https.onRequest(async(request, response) => {
    const { userAddress } = request.query
    // console.log(`userAddress: ${userAddress}`);
    // console.log(`contractAddress_ganache: ${contractAddress_ganache}`);
    // console.log(`abi: ${abi}`);
    try {
        const {GANACHE_PRIVATEKEY, GANACHE_URL, POLYGON_MUMBAI_PRIVATEKEY, POLYGON_MUMBAI_URL } = process.env
        const provider = new ethers.providers.JsonRpcProvider(POLYGON_MUMBAI_URL)
        const signer = new ethers.Wallet(POLYGON_MUMBAI_PRIVATEKEY, provider)
        const contract = new ethers.Contract(contractAddress_mumbai, abi, signer)
        const tx = await contract.mintAward(userAddress, IMAGE_URL)
        const receipt = await tx.wait()
        console.log(`receipt: ${tx.hash}`);
        response.send({'hash': tx.hash})
    } catch (error) {
        console.log(`error: ${error}`);
        response.send({error})
    }
    
    
})
