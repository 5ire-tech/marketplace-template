/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    contractAddress: '0x25cbCfc1262A436B9757816e60EBc6648B6eBBCB',
    tokenPrice: '0.001',
    networkId: '997',
  },
}

module.exports = nextConfig
