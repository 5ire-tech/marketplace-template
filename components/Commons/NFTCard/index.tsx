import { Typography } from '@mui/material'
import useContract from '@/hooks/useContract'
import FlexBox from '../FlexBox'
import { CardContainer, NFTImage } from './styles'

interface TextWrapperProps {
  title: string
  value: string | number | boolean
  isLarge?: boolean
}

export const TextWrapper = ({ title, value, isLarge }: TextWrapperProps) => (
  <FlexBox sx={{ mb: isLarge ? '8px' : '5px' }}>
    <Typography
      variant={isLarge ? 'subtitle2' : 'body1'}
      color='text.primary'
      sx={{ width: isLarge ? 110 : 65 }}
    >
      {title}:
    </Typography>
    <Typography
      variant={isLarge ? 'subtitle1' : 'subtitle2'}
      color='text.primary'
      fontWeight={600}
    >
      {value}
    </Typography>
  </FlexBox>
)

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
