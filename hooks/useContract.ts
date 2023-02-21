import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import abi from '../contracts/abi.json'

const contractAddress =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
  '0x1A08b8e1101840740Ec98bc7EBDf4fB538cc52F9'

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
