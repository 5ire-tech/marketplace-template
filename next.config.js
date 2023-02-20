/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    contractAddress: '0x5BAC7e2079480CD8027c4f905205E13E5eaBfC6c',
    tokenPrice: '0.00025',
    networkId: '5',
  },
}

module.exports = nextConfig
