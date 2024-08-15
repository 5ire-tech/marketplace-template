
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

import * as dotenv from 'dotenv';
dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.1",
        settings: {
          optimizer: {
            enabled: true,
          }
        }
      }
    ]
  },
  networks: {
    thunder_testnet: {
      url: "https://rpc.testnet.5ire.network",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY as string] : [],
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true,
    },
  },
};

export default config;