import { ethers } from 'ethers'
import { InjectedConnector } from '@web3-react/injected-connector'

const POLLING_INTERVAL = 12000
const chainId = process.env.NEXT_PUBLIC_NETWORK_ID as string

export const injected = new InjectedConnector({
  supportedChainIds: [Number(chainId)],
})

export const getLibrary = (provider: any): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = POLLING_INTERVAL
  return library
}

const NO_ETHEREUM_OBJECT = /No Ethereum provider was found on window.ethereum/

export const isNoEthereumObject = (err: string) => {
  return NO_ETHEREUM_OBJECT.test(err)
}
