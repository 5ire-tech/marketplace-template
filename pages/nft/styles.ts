import Image from 'next/image'
import { styled } from '@mui/material'
import DefaultLayout from '@/components/Commons/DefaultLayout'

export const NFTContainer = styled(DefaultLayout)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'flex-start',
  gap: 180,
  marginTop: 60,
  marginBottom: 60,
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

export const NewPriceInput = styled('input')(({ theme }) => ({
  width: 100,
  padding: '6px 12px',
  background: 'transparent',
  border: `1px solid ${theme.palette.text.primary}`,
  color: theme.palette.text.primary,
}))
