import { Box } from '@mui/material'
import { Navbars } from '.'
import { StyledDrawer, StyledImage } from './styles'

interface SidebarProps {
  isOpen: boolean
  handleClose: () => void
}

const Sidebar = ({ isOpen, handleClose }: SidebarProps) => (
  <StyledDrawer anchor='left' open={isOpen} onClose={handleClose}>
    <StyledImage
      src='/assets/imgs/logo.png'
      width={60}
      height={60}
      alt='MyLogo'
    />

    <Box role='presentation' onClick={handleClose}>
      <Navbars />
    </Box>
  </StyledDrawer>
)

export default Sidebar
