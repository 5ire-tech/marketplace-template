import { styled } from '@mui/material'
import FlexBox from '../FlexBox'

const Layout = styled(FlexBox)(({ theme }) => ({
  padding: '0 120px',
  [theme.breakpoints.down('xl')]: {
    padding: '0 80px',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '0 60px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 40px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 25px',
  },
}))

export default Layout
