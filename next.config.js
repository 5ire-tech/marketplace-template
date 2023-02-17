/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    contractAddress: '0x66608649da79cfBB670a77a005ED6277BA199a8F',
    tokenPrice: '0.001',
    networkId: '5',
  },
}

module.exports = nextConfig
