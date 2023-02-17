import { Typography } from '@mui/material'
import getAddress from '@/utility/getAddress'
import useContract from '@/hooks/useContract'
import FlexBox from '../FlexBox'
import { CardContainer, NFTImage } from './styles'

interface TextWrapperProps {
  title: string
  value: string | number | boolean
}

const TextWrapper = ({ title, value }: TextWrapperProps) => (
  <FlexBox sx={{ mb: 1 }}>
    <Typography variant='body1' color='text.primary' sx={{ width: 65 }}>
      {title}:
    </Typography>
    <Typography variant='subtitle2' color='text.primary' fontWeight={600}>
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
        src='/nfts/1676566816785_pexels-pixabay-60597.jpeg'
        alt='green iguana'
      />
      <section style={{ padding: '20px 40px' }}>
        <TextWrapper title='ID' value={nft.tokenId} />
        <TextWrapper title='Owner' value={getAddress(nft.owner)} />
        <TextWrapper title='Seller' value={getAddress(nft.seller)} />
        <TextWrapper
          title='Price'
          value={`${web3.utils.fromWei(nft.price?.toString())} 5ire`}
        />
        <TextWrapper title='State' value={nft.sold} />
      </section>
    </CardContainer>
  )
}

export default NFTCard
