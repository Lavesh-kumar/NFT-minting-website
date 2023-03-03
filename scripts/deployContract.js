/**
 *  This script will calculate the constructor arguments for BoredApe.sol and deploy it.
 *  After deploying, you can access the contract on etherscan.io with the deployed contract address.
 */

const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')

const BASE_URI = 'ipfs://bafybeiftqwulou2qoslratkyamsutdeohgabr7e4ecyx3ttim4hhg6lpgm/'
const proxyRegistryAddressRinkeby = '0x58807baD0B376efc12F5AD86aAc70E78ed67deaE'
const proxyRegistryAddressMainnet = '0x58807baD0B376efc12F5AD86aAc70E78ed67deaE'
const proxyRegistryAddressmatic = '0x58807baD0B376efc12F5AD86aAc70E78ed67deaE'

async function main() {
  // Calculate merkle root from the whitelist array
  const leafNodes = whitelist.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
  const root = merkleTree.getRoot()

  // Deploy the contract
  const BoredApes = await hre.ethers.getContractFactory('BoredApe')
  const boredApes = await BoredApes.deploy(
    BASE_URI,
    root,
    proxyRegistryAddressRinkeby
  )

  await boredApes.deployed()

  console.log('TheSpot Money Cup Game deployed to:', boredApes.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
