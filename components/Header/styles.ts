import Image from 'next/image'
import { Drawer, styled } from '@mui/material'
import Layout from '../Commons/Layout'

export const HeaderContainer = styled(Layout)(({ theme }) => ({
  justifyContent: 'space-between',
  height: 100,
  ul: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,

    li: {
      listStyleType: 'none',

      a: {
        display: 'flex',
        alignItems: 'flex-end',
        height: 100,
        padding: '0 25px 25px',
        color: theme.palette.text.primary,
        textDecoration: 'none',

        '&:hover': {
          background: theme.palette.orange.main,
        },
      },
    },
  },
}))

export const StyledImage = styled(Image)(() => ({
  width: '100px',
  height: 'auto',
  cursor: 'pointer',
}))

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '.MuiPaper-root': {
    width: '260px',
    padding: '40px 30px',
    background: theme.palette.secondary.main,

    ul: {
      margin: '30px 0 0 0',
      padding: 0,

      li: {
        listStyleType: 'none',
        padding: '12px 0',

        a: {
          textDecoration: 'none',
        },
      },
    },
  },
}))
