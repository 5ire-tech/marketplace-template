import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import NFTMarketplace from '@/artifacts/contracts/NftMarketplace.sol/NFTMarketplace.json'

const contractAddress =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
  '0xE1F9b6ba798AB0830703Fc964A5FdC4B7d181D1B'

const useContract = () => {
  const web3 = new Web3(Web3.givenProvider)

  const nftContract = new web3.eth.Contract(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    NFTMarketplace.abi as unknown as AbiItem,
    contractAddress,
  )

  return { web3, nftContract }
}

export default useContract
