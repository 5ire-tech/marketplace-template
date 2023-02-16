import axios from 'axios'
import { ChangeEvent, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { Typography } from '@mui/material'
import Button from '../Commons/Button'
import FlexBox from '../Commons/FlexBox'
import Loader from '../Commons/Loader'
import { MintNFTContainer, NFTImage } from './styles'

const MintNFT = () => {
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
    if (!selectedFile) return

    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append('myNFT', selectedFile)
      const { data } = await axios.post('/api/image', formData)
      if (data.status === 200) {
        toast.success('Mint successfully!')
      }
    } catch (error: any) {
      toast.error(error.response?.data)
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
          <Typography variant='subtitle2' fontWeight={500} mb={1.5}>
            Select an NFT:
          </Typography>
          <NFTImage
            src={imageUrl ? imageUrl : '/assets/imgs/no_img.jpeg'}
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

        <Button
          disabled={isUploading}
          sx={{ width: '100%', mt: 3 }}
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
