import { useCallback, useState } from 'react'
import MintNFT from '@/components/MintNFT'
import ListedNFTs from '@/components/ListedNFTs'

export default function Home() {
  const [allNfts, setAllNfts] = useState<NFTProps[]>([])

  const getAllNfts = useCallback((nfts: NFTProps[]) => {
    setAllNfts(nfts)
  }, [])

  return (
    <>
      <MintNFT getAllNfts={getAllNfts} />
      <ListedNFTs allNfts={allNfts} />
    </>
  )
}
