import { Button, styled } from '@mui/material'

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  borderRadius: 10,
  fontSize: theme.typography.subtitle2.fontSize,
  lineHeight: theme.typography.subtitle2.lineHeight,
  fontWeight: theme.typography.subtitle2.fontWeight,
  color: theme.palette.text.primary,
  background: theme.palette.orange.main,
  textTransform: 'capitalize',

  ':hover': {
    background: theme.palette.orange.main,
  },
}))

export default StyledButton
