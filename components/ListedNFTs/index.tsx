import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
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
import useContract from '@/hooks/useContract'
import useNFTContext from '@/hooks/useNFTContext'
import FlexBox from '../Commons/FlexBox'
import NFTCard from '../Commons/NFTCard'
import Loader from '../Commons/Loader'
import { ListContainer, FormControl, CardGroup } from './styles'

const options = ['All', 'My NFTs', 'Listed NFTs']

interface ListedNFTsProps {
  allNfts: NFTProps[]
}

const ListedNFTs = ({ allNfts }: ListedNFTsProps) => {
  const router = useRouter()
  const { account } = useWeb3React()
  const { nftContract } = useContract()
  const { selectNFT } = useNFTContext()

  const [isLoading, setIsLoading] = useState(false)
  const [selected, setSelected] = useState(options[0])
  const [nfts, setNfts] = useState<NFTProps[]>([])

  useEffect(() => {
    setNfts(allNfts)
  }, [allNfts])

  const fetchAllNfts = useCallback(async (): Promise<NFTProps[]> => {
    try {
      const _nfts = await nftContract.methods.fetchMarketItems().call()
      return _nfts
    } catch (err) {
      return []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMyNfts = useCallback(async (): Promise<NFTProps[]> => {
    try {
      const _nfts: NFTProps[] = await nftContract.methods
        .fetchItemsListed()
        .call()
      const myNfts = _nfts.filter(
        (_nft) => _nft.owner?.toLowerCase() === account?.toLowerCase(),
      )
      return myNfts
    } catch (err) {
      return []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMyOwnNfts = useCallback(async (): Promise<NFTProps[]> => {
    try {
      const _nfts = await nftContract.methods.fetchMyNfts().call()
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
      isApiSubscribed = false
    }
  }, [account, fetchAllNfts])

  const handleChange = async (event: SelectChangeEvent) => {
    setSelected(event.target.value as string)

    let _nfts = []
    setIsLoading(true)
    if (event.target.value === 'All') {
      _nfts = await fetchAllNfts()
    } else if (event.target.value === 'My NFTs') {
      _nfts = await fetchMyNfts()
    } else {
      _nfts = await fetchMyOwnNfts()
    }
    setNfts(_nfts)
    setIsLoading(false)
  }

  const nftHandler = (_nft: NFTProps) => {
    selectNFT(_nft)
    router.push(`/nft/${_nft.tokenId}`)
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
      {isLoading ? (
        <FlexBox sx={{ justifyContent: 'center', width: '100%', height: 150 }}>
          <Loader style={{ width: 48, height: 48 }} />
        </FlexBox>
      ) : (
        <CardGroup>
          {nfts.map((item) => (
            <div
              key={`tokenId-${item.tokenId}`}
              aria-hidden='true'
              style={{ cursor: 'pointer' }}
              onClick={() => nftHandler(item)}
            >
              <NFTCard nft={item} />
            </div>
          ))}
        </CardGroup>
      )}
    </ListContainer>
  )
}

export default ListedNFTs
