/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    contractAddress: '0x1A08b8e1101840740Ec98bc7EBDf4fB538cc52F9',
    tokenPrice: '0.00025',
    // 5ire Thunder chainId
    networkId: '997',
  },
}

module.exports = nextConfig
