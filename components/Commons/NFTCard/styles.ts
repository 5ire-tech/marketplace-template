import Image from 'next/image'
import { styled } from '@mui/material'

export const CardContainer = styled('div')(({ theme }) => ({
  width: 300,
  background: theme.palette.gray.main,
  borderRadius: 12,
}))

export const NFTImage = styled(Image)(() => ({
  width: 300,
  height: 'auto',
  borderTopRightRadius: 12,
  borderTopLeftRadius: 12,
}))
