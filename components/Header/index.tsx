import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useWeb3React } from '@web3-react/core'
import { Typography, useMediaQuery } from '@mui/material'
import navs from '@/utility/navs'
import { injected } from '@/utility/web3React'
import getAddress from '@/utility/getAddress'
import Button from '../Commons/Button'
import Loader from '../Commons/Loader'
import { HeaderContainer, StyledImage } from './styles'

export const Navbars = () => {
  const matches = useMediaQuery('(min-width: 900px)')

  return (
    <ul>
      {navs.map((nav) => (
        <li key={nav.title}>
          <Link href={nav.link}>
            <Typography
              variant='subtitle2'
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
  const [isPending, setIsPending] = useState(false)

  const { activate, chainId, account } = useWeb3React()

  const onConnectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      setIsPending(true)

      try {
        await activate(injected)

        if (chainId && chainId.toString() !== process.env.networkId) {
          toast.error(`Switch network to ${process.env.networkId}.`)
        }
      } catch (error) {
        if (error instanceof Error) toast.error(error.message)
      }

      setIsPending(false)
    } else {
      toast.error('Not found Metamask, Please install MetaMask.')
    }
  }

  return (
    <header>
      <HeaderContainer>
        <Link href='/'>
          <StyledImage
            src='/assets/imgs/logo.png'
            width={60}
            height={60}
            alt='MyLogo'
          />
        </Link>
        <Button
          disabled={isPending || typeof account === 'string'}
          sx={{ width: 160 }}
          onClick={onConnectWallet}
        >
          {account ? getAddress(account) : 'Connect Wallet'}
          {isPending && <Loader />}
        </Button>
      </HeaderContainer>
    </header>
  )
}

export default Header
