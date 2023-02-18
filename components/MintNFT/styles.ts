import Image from 'next/image'
import { styled } from '@mui/material'
import DefaultLayout from '../Commons/DefaultLayout'

export const MintNFTContainer = styled(DefaultLayout)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'flex-start',
  gap: 180,
  marginTop: 60,
  [theme.breakpoints.down('lg')]: {
    gap: 120,
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 60,
  },
}))

export const NFTImage = styled(Image)(() => ({
  width: '100%',
  height: 'auto',
  borderRadius: 12,
}))
