/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    contractAddress: '0x1A08b8e1101840740Ec98bc7EBDf4fB538cc52F9',
    tokenPrice: '0.00025',
    // 5ire Thunder chainId
    networkId: '997',
    // Private key to deploy smart contract
    privateKey:
      '0xcdbdc49c1e1371b0bdcb0376ac7c5cb87d871c53a0d6eaf2807cc4eb8d4520d8',
  },
}

module.exports = nextConfig
