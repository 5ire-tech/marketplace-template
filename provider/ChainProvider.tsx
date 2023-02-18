import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useWeb3React } from '@web3-react/core'
import { injected } from '@/utility/web3React'

interface ChainProviderProps {
  children: React.ReactNode
}

const ChainProvider = ({ children }: ChainProviderProps) => {
  const { activate, setError, chainId, active } = useWeb3React()

  useEffect(() => {
    const loadInjectedWallet = async () => {
      const isAuthorized = await injected.isAuthorized()
      if (isAuthorized) {
        await activate(injected)
      }
    }
    if (typeof window.ethereum !== 'undefined') {
      try {
        loadInjectedWallet()
      } catch (_error) {
        if (_error instanceof Error) toast.error(_error.message)
      }
    }
  }, [activate, setError])

  useEffect(() => {
    if (active && chainId && chainId.toString() !== process.env.networkId) {
      toast.error(`Switch  network to ${process.env.networkId}.`)
    }
  }, [active, chainId])

  return <>{children}</>
}

export default ChainProvider
