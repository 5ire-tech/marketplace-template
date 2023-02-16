import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import abi from '../contracts/abi.json'

const contractAddress =
  process.env.contractAddress || '0x25cbCfc1262A436B9757816e60EBc6648B6eBBCB'

const useContract = () => {
  const web3 = new Web3(Web3.givenProvider)

  const nftContract = new web3.eth.Contract(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    abi as unknown as AbiItem,
    contractAddress,
  )

  return { web3, nftContract }
}

export default useContract
