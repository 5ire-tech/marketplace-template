import Image from 'next/image'
import { styled } from '@mui/material'

export const CardContainer = styled('div')(({ theme }) => ({
  width: 300,
  background: theme.palette.gray.main,
  borderRadius: 12,
}))

export const NFTImage = styled(Image)(() => ({
  width: '100%',
  height: 300,
  borderTopRightRadius: 12,
  borderTopLeftRadius: 12,
}))
