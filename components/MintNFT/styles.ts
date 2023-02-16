import Image from 'next/image'
import { styled } from '@mui/material'
import Layout from '../Commons/Layout'

export const MintNFTContainer = styled(Layout)(() => ({
  justifyContent: 'center',
  marginTop: 24,
}))

export const NFTImage = styled(Image)(({ theme }) => ({
  width: 400,
  height: 'auto',
  borderRadius: 12,
  [theme.breakpoints.down('sm')]: {
    width: 300,
  },
}))
