import { FormControl as BaseFormControl, styled } from '@mui/material'
import Layout from '../Commons/Layout'

export const ListContainer = styled(Layout)(() => ({
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: 80,
}))

export const FormControl = styled(BaseFormControl)(({ theme }) => ({
  '.MuiFormLabel-root': {
    color: theme.palette.text.primary,
    '&.Mui-focused': {
      color: theme.palette.text.primary,
    },
  },
  '.MuiInputBase-root': {
    background: theme.palette.orange.main,
  },
}))

export const CardGroup = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(300px, 1fr))`,
  width: '100%',
  gap: 32,
  marginTop: 50,
  alignItems: 'center',
  justifyItems: 'center',
}))
