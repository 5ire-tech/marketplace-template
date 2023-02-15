#  Marketplace Dapp

## Prerequisites

- Node >= 16.0 ([https://nodejs.org](https://nodejs.org))
- yarn: `npm install --global yarn`

## Steps
### Smart contract
1. Compile voting smart contract 
    ```
    + Set PRIVATE_KEY in .env file

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
    Voting contract deployed to: 0x2a2c8469Ff26B7f91aAB93Bb5Dc668f6D2804403
    ```

### Frontend
1. Install required dependencies 
    ```
    yarn install
    
2. Run project
    ```
    yarn dev
