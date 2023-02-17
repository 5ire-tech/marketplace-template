import { createContext } from 'react'

interface NetworkContextProps {
  nft: NFTProps | null
  selectNFT: (nft: NFTProps) => void
}

const NFTContext = createContext<NetworkContextProps>({
  nft: null,
  selectNFT: () => {
    null
  },
})

export default NFTContext
