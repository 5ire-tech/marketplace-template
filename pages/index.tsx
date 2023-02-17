import Header from '@/components/Header'
import MintNFT from '@/components/MintNFT'
import ListedNFTs from '@/components/ListedNFTs'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MintNFT />
        <ListedNFTs />
      </main>
    </>
  )
}
