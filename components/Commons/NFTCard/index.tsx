import useContract from '@/hooks/useContract'
import TextWrapper from '../TextWrapper'
import { CardContainer, NFTImage } from './styles'

interface NFTCardProps {
  nft: NFTProps
}

const NFTCard = ({ nft }: NFTCardProps) => {
  const { web3 } = useContract()

  return (
    <CardContainer>
      <NFTImage
        width={300}
        height={300}
        src={`/nfts/${nft.tokenId}.png`}
        alt={`nft-${nft.tokenId}`}
      />
      <section style={{ padding: '20px 25px' }}>
        <TextWrapper title='ID' value={nft.tokenId} />
        <TextWrapper
          title='Price'
          value={`${web3.utils.fromWei(nft.price?.toString())} 5ire`}
        />
      </section>
    </CardContainer>
  )
}

export default NFTCard
