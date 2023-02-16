import Link from 'next/link'
import { useCallback, useState } from 'react'
import { Button as BaseButton, Typography, useMediaQuery } from '@mui/material'
import navs from '@/utility/navs'
import Button from '../Commons/Button'
import FlexBox from '../Commons/FlexBox'
import Sidebar from './Sidebar'
import { HeaderContainer, StyledImage } from './styles'
import MenuIcon from '@/public/assets/svgs/MenuIcon'

export const Navbars = () => {
  const matches = useMediaQuery('(min-width: 900px)')

  return (
    <ul>
      {navs.map((nav) => (
        <li key={nav.title}>
          <Link href={nav.link}>
            <Typography
              variant='body1'
              fontWeight={300}
              color={matches ? 'text.primary' : 'text.secondary'}
            >
              {nav.title}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Header = () => {
  const matches = useMediaQuery('(min-width: 900px)')

  const [isOpen, setIsOpen] = useState(false)

  const sidebarHandler = () => setIsOpen(true)

  const toggleDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <header>
      <HeaderContainer>
        <StyledImage
          src='/assets/imgs/logo.png'
          width={60}
          height={60}
          alt='MyLogo'
        />

        {matches ? (
          <FlexBox>
            <Navbars />
            <Button sx={{ margin: '30px 0 0 25px' }}>Connect Wallet</Button>
          </FlexBox>
        ) : (
          <>
            <BaseButton
              sx={{
                width: 32,
                minWidth: 32,
                height: 32,
              }}
              onClick={sidebarHandler}
            >
              <MenuIcon sx={{ width: '40px', height: '40px' }} />
            </BaseButton>
            <Sidebar isOpen={isOpen} handleClose={toggleDrawer} />
          </>
        )}
      </HeaderContainer>
    </header>
  )
}

export default Header
