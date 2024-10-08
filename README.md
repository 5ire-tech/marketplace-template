#  Marketplace Dapp

Hardhat | Ethers | Typescript | Nextjs to compile and test a Marketplace Smart Contract

## Prerequisites

- Node >= 16.0
- yarn


## Steps
### Smart contract
1. Compile marketplace NFT smart contract 
    ```
    + Set PRIVATE_KEY in .env file ( Create new .env file , get configuration from .env.example)

    + npx hardhat compile
2. Testing contract
    ```
    npx hardhat test
3. Deploying contract
    ```
    npx hardhat run --network thunder_testnet scripts/deploy.ts
    ```
    Contract address will be shown in the terminal:
    ```
    Marketplace contract deployed to: 0xE1F9b6ba798AB0830703Fc964A5FdC4B7d181D1B
    ```

### Frontend

0. Add 5ire Thunder testnet in Metamask manually [Link](https://docs.5ire.org/docs/Wallets/MetaMask)
1. Install required dependencies 
    ```
    yarn install
2. Set marketplace contract address that deployed in [env.development](https://github.com/5ire-tech/marketplace-template/blob/master/.env.development#L2)
3. Run project
    ```
    yarn dev


## Advanced Topic
1. IPFS
2. Collections
3. ...
