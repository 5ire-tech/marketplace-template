import { Typography } from '@mui/material'
import FlexBox from '../FlexBox'

interface TextWrapperProps {
  title: string
  value: string | number | boolean
  isLarge?: boolean
}

const TextWrapper = ({ title, value, isLarge }: TextWrapperProps) => (
  <FlexBox sx={{ mb: isLarge ? '8px' : '5px' }}>
    <Typography
      variant={isLarge ? 'subtitle2' : 'body1'}
      color='text.primary'
      sx={{ width: isLarge ? 110 : 65 }}
    >
      {title}:
    </Typography>
    <Typography
      variant={isLarge ? 'subtitle1' : 'subtitle2'}
      color='text.primary'
      fontWeight={600}
    >
      {value}
    </Typography>
  </FlexBox>
)

export default TextWrapper
