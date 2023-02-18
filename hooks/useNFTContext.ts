import { useContext } from 'react'
import NFTContext from '../contexts/NFTContext'

const useNFTContext = () => {
  const { nft, selectNFT } = useContext(NFTContext)
  return { nft, selectNFT }
}

export default useNFTContext
