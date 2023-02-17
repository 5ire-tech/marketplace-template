import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { Web3ReactProvider } from '@web3-react/core'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { getLibrary } from '@/utility/web3React'
import ChainProvider from '@/provider/ChainProvider'
import Layout from '@/components/Layout'
import 'react-toastify/dist/ReactToastify.css'

import createEmotionCache from '../utility/createEmotionCache'
import theme from '../styles/theme'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const lightTheme = createTheme(theme)

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ChainProvider>
          <Head>
            <meta
              name='viewport'
              content='initial-scale=1, width=device-width'
            />
          </Head>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
          <ToastContainer position='top-right' autoClose={4000} />
        </ChainProvider>
      </Web3ReactProvider>
    </CacheProvider>
  )
}

export default MyApp
