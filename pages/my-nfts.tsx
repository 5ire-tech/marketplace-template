import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import path from 'path'
import fs from 'fs/promises'
import Link from 'next/link'

interface MyNFTsProps {
  dirs: string[]
}

const MyNFTs: NextPage<MyNFTsProps> = ({ dirs }) => {
  return (
    <div>
      {dirs.map((item) => (
        <Link key={item} href={'/images' + item} target='_blank'>
          item
        </Link>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const props = { dirs: [] }

  try {
    const dirs = await fs.readdir(path.join(process.cwd(), '/public/nfts'))
    props.dirs = dirs as any
    return { props }
  } catch (error) {
    return { props }
  }
}

export default MyNFTs
