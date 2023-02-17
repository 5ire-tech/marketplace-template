import axios from 'axios'
import { ChangeEvent, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { useWeb3React } from '@web3-react/core'
import { Typography } from '@mui/material'
import useContract from '@/hooks/useContract'
import Button from '../Commons/Button'
import FlexBox from '../Commons/FlexBox'
import Loader from '../Commons/Loader'
import { MintNFTContainer, NFTImage } from './styles'

const initImgUrl = '/assets/imgs/no_img.jpeg'
const tokenPrice = process.env.tokenPrice as string

const MintNFT = () => {
  const { account } = useWeb3React()
  const { web3, nftContract } = useContract()

  const inputRef = useRef<HTMLInputElement | null>(null)

  const [isUploading, setIsUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File>()
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }

    const file = e.target.files[0]
    setSelectedFile(file)
    setImageUrl(URL.createObjectURL(file))
  }

  const handleUploadClick = () => {
    inputRef.current?.click()
  }

  const onMint = async () => {
    if (!selectedFile) {
      toast.error('Please select a file to mint')
      return
    }

    if (typeof account !== 'string') {
      toast.error('Please connect wallet')
      return
    }

    setIsUploading(true)

    try {
      const price = web3.utils.toWei(tokenPrice)

      const receipt = await nftContract.methods
        .createToken(imageUrl, price)
        .send({ from: account, value: price })
      const { tokenId } = receipt.events.MarketItemCreated.returnValues

      const formData = new FormData()
      formData.append('myNFT', selectedFile, `${tokenId}.png`)
      await axios.post('/api/image', formData)

      toast.success('Mint successfully!')
      setImageUrl(initImgUrl)
      setSelectedFile(undefined)
    } catch (error: any) {
      toast.error(error?.message)
    }
    setIsUploading(false)
  }

  return (
    <MintNFTContainer>
      <section>
        <FlexBox
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            cursor: 'pointer',
          }}
          onClick={handleUploadClick}
        >
          <Typography variant='h3' mb={2.5}>
            Select an NFT:
          </Typography>
          <NFTImage
            src={imageUrl ? imageUrl : initImgUrl}
            width={400}
            height={400}
            priority={imageUrl ? false : true}
            alt='New NFT'
          />
          <input
            type='file'
            hidden
            accept='image/*'
            ref={inputRef}
            onChange={handleFileChange}
          />
        </FlexBox>
      </section>
      <section>
        <Typography variant='h3' mb={2.5}>
          NFT Info
        </Typography>
        <Typography variant='subtitle1' mb={1}>
          Name:
        </Typography>
        <Typography variant='subtitle1' mb={1}>
          Size:
        </Typography>
        <Typography variant='subtitle1'>Asking Price: </Typography>

        <Button
          disabled={isUploading}
          sx={{ width: '100%', mt: 5 }}
          onClick={onMint}
        >
          Mint NFT
          {isUploading && <Loader />}
        </Button>
      </section>
    </MintNFTContainer>
  )
}

export default MintNFT
