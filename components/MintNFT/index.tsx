import { ChangeEvent, useRef, useState } from 'react'
import { Typography } from '@mui/material'
import Button from '../Commons/Button'
import FlexBox from '../Commons/FlexBox'
import { MintNFTContainer, NFTImage } from './styles'

const MintNFT = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File>()
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleUploadClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }

    const _file = e.target.files[0]
    setFile(_file)
    setImageUrl(URL.createObjectURL(_file))
  }

  console.log(file)
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
        <Button sx={{ width: '100%', mt: 3 }}>Mint NFT</Button>
      </section>
    </MintNFTContainer>
  )
}

export default MintNFT
