import { useState } from 'react'
import NFTContext from '../contexts/NFTContext'

interface NFTContextProviderProps {
  children: React.ReactNode
}

const NFTContextProvider = ({ children }: NFTContextProviderProps) => {
  const [nft, setNFT] = useState<NFTProps | null>(null)

  const selectNFT = (_nft: NFTProps) => {
    setNFT(_nft)
  }

  return (
    <NFTContext.Provider value={{ nft, selectNFT }}>
      {children}
    </NFTContext.Provider>
  )
}

export default NFTContextProvider
