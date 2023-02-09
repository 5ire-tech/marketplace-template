import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

dotenv.config();



const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
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
      url: "https://chain-node.5ire.network",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY as string] : [],
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true,
    },
    // bsc_testnet: {
    //   url:"https://data-seed-prebsc-1-s2.binance.org:8545/",
    //   chainId: 97,
    //   accounts: 
    //     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],

    // }
  },
};

export default config;