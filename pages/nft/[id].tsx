import { useState } from 'react'
import { toast } from 'react-toastify'
import { Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import useNFTContext from '@/hooks/useNFTContext'
import useContract from '@/hooks/useContract'
import getAddress from '@/utility/getAddress'
import Loader from '@/components/Commons/Loader'
import Button from '@/components/Commons/Button'
import FlexBox from '@/components/Commons/FlexBox'
import { TextWrapper } from '@/components/Commons/NFTCard'
import { NFTContainer, NFTImage, NewPriceInput } from './styles'

const tokenPrice = process.env.tokenPrice as string

const NFTDetail = () => {
  const { account } = useWeb3React()
  const { nft } = useNFTContext()
  const { web3, nftContract } = useContract()

  const [isPending, setIsPending] = useState(false)

  const OnSell = async () => {
    if (!nft || !account) return

    setIsPending(true)
    try {
      const price = web3.utils.toWei(tokenPrice)
      await nftContract.methods
        .resellToken(nft.tokenId)
        .send({ from: account, value: price })
    } catch (error: any) {
      toast.error(error?.message)
    }
    setIsPending(false)
  }

  const onBuy = async () => {
    if (!nft || !account) return

    setIsPending(true)
    try {
      const price = web3.utils.toWei(tokenPrice)
      await nftContract.methods
        .createMarketSale(nft.tokenId)
        .send({ from: account, value: price })
    } catch (error: any) {
      toast.error(error?.message)
    }
    setIsPending(false)
  }

  if (!nft) {
    return (
      <NFTContainer>
        <Typography variant='h5'>NFT Not found, please try later</Typography>
      </NFTContainer>
    )
  }

  return (
    <NFTContainer>
      <NFTImage
        src={`/nfts/${nft?.tokenId}.png`}
        width={400}
        height={400}
        alt={`nft-${nft?.tokenId}`}
      />
      <section>
        <Typography variant='h3' mb={3}>
          NFT Detail
        </Typography>
        <TextWrapper title='ID' value={nft.tokenId} isLarge />
        <TextWrapper title='Owner' value={getAddress(nft.owner)} isLarge />
        <TextWrapper title='Seller' value={getAddress(nft.seller)} isLarge />
        <TextWrapper
          title='Asking Price'
          isLarge
          value={`${web3.utils.fromWei(nft.price?.toString())} 5ire`}
        />
        <FlexBox sx={{ mb: '8px' }}>
          <Typography
            variant='subtitle2'
            color='text.primary'
            sx={{ width: 110 }}
          >
            New Price:
          </Typography>
          <NewPriceInput value={12} />
        </FlexBox>
        <TextWrapper title='State' value={nft.sold} isLarge />
        <Button
          sx={{ width: 160, mt: 4 }}
          disabled={isPending}
          onClick={
            account?.toLowerCase() === nft.owner.toLowerCase() ? OnSell : onBuy
          }
        >
          {account?.toLowerCase() === nft.owner.toLowerCase() ? 'Sell' : 'Buy'}{' '}
          NFT
          {isPending && <Loader />}
        </Button>
      </section>
    </NFTContainer>
  )
}

export default NFTDetail
