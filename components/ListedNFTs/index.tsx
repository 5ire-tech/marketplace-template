import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Theme,
} from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import FlexBox from '../Commons/FlexBox'
import NFTCard from '../Commons/NFTCard'
import useContract from '@/hooks/useContract'
import { ListContainer, FormControl, CardGroup } from './styles'

const options = ['All', 'My NFTs']

const ListedNFTs = () => {
  const { account } = useWeb3React()
  const { nftContract } = useContract()

  const [selected, setSelected] = useState(options[0])
  const [nfts, setNfts] = useState<NFTProps[]>([])

  console.log(nfts)

  const fetchAllNfts = useCallback(async (): Promise<NFTProps[]> => {
    try {
      const _nfts = await nftContract.methods.fetchMarketItems().call()
      return _nfts
    } catch (err) {
      return []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!account) return

    let isApiSubscribed = true
    fetchAllNfts().then((res: NFTProps[]) => {
      if (isApiSubscribed) {
        setNfts(res)
      }
    })
    return () => {
      // cancel the subscription
      isApiSubscribed = false
    }
  }, [account, fetchAllNfts])

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string)
  }

  return (
    <ListContainer>
      <FlexBox sx={{ justifyContent: 'space-between', width: '100%' }}>
        <Typography variant='h3'>Listed NFTs</Typography>
        <Box
          sx={{
            minWidth: 120,
          }}
        >
          <FormControl fullWidth size='small'>
            <InputLabel id='nft-select-label'></InputLabel>
            <Select
              labelId='nft-select-label'
              id='nft-select'
              value={selected}
              label=''
              inputProps={{
                MenuProps: {
                  MenuListProps: {
                    sx: {
                      color: (theme: Theme) => theme.palette.text.secondary,
                    },
                  },
                },
              }}
              onChange={handleChange}
            >
              {options.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </FlexBox>
      <CardGroup>
        {nfts.map((item) => (
          <Link
            key={`tokenId-${item.tokenId}`}
            href={`/nft/${item.tokenId}`}
            style={{ textDecoration: 'none' }}
          >
            <NFTCard nft={item} />
          </Link>
        ))}
      </CardGroup>
    </ListContainer>
  )
}

export default ListedNFTs
