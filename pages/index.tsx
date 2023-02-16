// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import { useState, useEffect } from 'react'
// import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import MintNFT from '@/components/MintNFT'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [text, setText] = useState('')

  // useEffect(() => {
  //   console.log(text)
  // }, [])

  return (
    <>
      <Header />
      <main>
        <MintNFT />
      </main>
    </>
  )
}
