import { useState, ChangeEvent, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import useNFTContext from '@/hooks/useNFTContext'
import useContract from '@/hooks/useContract'
import getAddress from '@/utility/getAddress'
import Loader from '@/components/Commons/Loader'
import Button from '@/components/Commons/Button'
import FlexBox from '@/components/Commons/FlexBox'
import TextWrapper from '@/components/Commons/TextWrapper'
import { NFTContainer, NFTImage, NewPriceInput } from './styles'

const NFTDetail = () => {
  const { account } = useWeb3React()
  const { nft } = useNFTContext()
  const { web3, nftContract } = useContract()

  const [isPending, setIsPending] = useState(false)
  const [newPrice, setNewPrice] = useState('0')
  const [isPossible2Sell, setIsPossible2Sell] = useState(false)

  useEffect(() => {
    if (nft) {
      setNewPrice(web3.utils.fromWei(nft.price.toString()))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nft])

  useEffect(() => {
    if (account?.toLowerCase() === nft?.owner.toLowerCase()) {
      setIsPossible2Sell(true)
    } else {
      setIsPossible2Sell(false)
    }
  }, [account, nft?.owner])

  const OnSell = async () => {
    if (!nft || !account) return

    setIsPending(true)
    try {
      const price = web3.utils.toWei(newPrice)
      await nftContract.methods
        .resellToken(nft.tokenId, price)
        .send({ from: account })
      toast.success('Successfully selled!')
    } catch (error: any) {
      toast.error(error?.message)
    }
    setIsPending(false)
  }

  const onBuy = async () => {
    if (!nft || !account) return

    setIsPending(true)
    try {
      const price = web3.utils.toWei(newPrice)
      await nftContract.methods
        .createMarketSale(nft.tokenId)
        .send({ from: account, value: price })
      toast.success('Successfully purchased!')
    } catch (error: any) {
      toast.error(error?.message)
    }
    setIsPending(false)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPrice(e.target.value)
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
        {isPossible2Sell && (
          <FlexBox sx={{ mb: '8px' }}>
            <Typography
              variant='subtitle2'
              color='text.primary'
              sx={{ width: 110 }}
            >
              New Price:
            </Typography>
            <NewPriceInput value={newPrice} onChange={handleChange} />
            <Typography variant='subtitle2' color='text.primary'>
              &nbsp;5ire
            </Typography>
          </FlexBox>
        )}
        <Button
          sx={{ width: 160, mt: 4 }}
          disabled={
            isPending || account?.toLowerCase() === nft.seller.toLowerCase()
          }
          onClick={isPossible2Sell ? OnSell : onBuy}
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
