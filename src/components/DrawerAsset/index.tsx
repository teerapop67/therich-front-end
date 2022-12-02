import React, { useEffect, useState } from 'react'
import { ArrowUpCircle, ArrowDownCircle } from 'react-feather'
import styled, { keyframes } from 'styled-components'
import { useActiveWeb3React } from '../../hooks'
import { useAllTokens } from '../../hooks/Tokens'
import { useAllTokenBalances, useETHBalances } from '../../state/wallet/hooks'
import CurrencyLogo from '../CurrencyLogo'
import EthereumLogo from '../../assets/images/ethereum-logo.png'

// import { ArrowLeft } from 'react-feather'

const DrawerContainer = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 350px;
  overflow: hidden;
  z-index: ${({ isOpen }) => (isOpen ? 3 : -1)};

  @media screen and (max-width: 820px) {
    width: 0;
    z-index: 0;
  }
`

const DrawerWrapper = styled.div<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.3s ease-in-out;
  background: #111;
  opacity: 0.9;
  height: 100%;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
`

const CoinWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  align-items: center;
  padding: 90px 60px;

  .box-token {
    padding: 3px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 10px;
    border: 0.5px solid ${({ theme }) => theme.yellow1};
    color: #fff;

    .name-coin {
      color: #f4e8e8;
    }
  }
  margin-bottom: 30px;
`

const AnimateArrow = keyframes`
    from { transform: translateX(0)} to { transform: translateX(5px)}

`

const ArrowWrapper = styled.span<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${AnimateArrow} 0.3s infinite alternate;
  position: absolute;
  top: 50%;
  padding: 12px;
  width: fit-content;
  right: ${({ isOpen }) => (isOpen ? '18em' : '30px')};
  background: #000;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 12px;
  color: #fff;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  height: fit-content;
  z-index: 999;
  transform: rotateY(180deg);
`

// const ArrowDrawer = styled.div<{ isOpen: boolean }>`
//   transform: ${({ isOpen }) => (!isOpen ? null : 'rotateY(180deg)')};
//   padding: 5px;
// `
const DrawerHeader = styled.div`
  font-weight: bold;
  justify-content: center;
  display: flex;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) inset;
  align-items: center;
  width: 100%;
  font-size: 18px;
  margin: 0;
  height: 80px;
  background-color: #222;
  color: #fff;
`

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const DrawerAsset: React.FC<any> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const allTokens: any = useAllTokens()
  const [sortAToZ, setSortAToZ] = useState(true)

  const [totalTokenAddress, setTotalTokenAddress] = useState<any>([])
  const balance = useAllTokenBalances()

  const { account } = useActiveWeb3React()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  // const earth = '0x08B40414525687731C23F430CEBb424b332b3d35'
  // const rich = '0x6e3B1C44C888487Ae92cc4651858F0a838Eb69A2'
  // const jup = '0x9Aac6FB41773af877a2Be73c99897F3DdFACf576'
  // const wdevShow = '0xD909178CC99d318e4D46e7E66a972955859670E1'

  console.log(totalTokenAddress)

  useEffect(() => {
    if (totalTokenAddress.length === 0) {
      setTotalTokenAddress([
        {
          name: 'earth',
          logo: allTokens['0x08B40414525687731C23F430CEBb424b332b3d35'],
          address: '0x08B40414525687731C23F430CEBb424b332b3d35'
        },
        {
          name: 'rich',
          logo: allTokens['0x6e3B1C44C888487Ae92cc4651858F0a838Eb69A2'],
          address: '0x6e3B1C44C888487Ae92cc4651858F0a838Eb69A2'
        },
        {
          name: 'jup',
          logo: allTokens['0x9Aac6FB41773af877a2Be73c99897F3DdFACf576'],
          address: '0x9Aac6FB41773af877a2Be73c99897F3DdFACf576'
        },
        {
          name: 'wdev',
          logo: allTokens['0xD909178CC99d318e4D46e7E66a972955859670E1'],
          address: '0xD909178CC99d318e4D46e7E66a972955859670E1'
        }
      ])
    }
  }, [sortAToZ])

  const compareStrings = (a: string, b: string) => {
    return a < b ? -1 : a > b ? 1 : 0
  }

  const handleSort = () => {
    if (sortAToZ) {
      const reZtoA = totalTokenAddress.sort((a: any, b: any) => b.name.localeCompare(a.name))
      setTotalTokenAddress(reZtoA)
      setSortAToZ(false)
    } else {
      const reAtoZ = totalTokenAddress.sort((a: any, b: any) => compareStrings(a.name, b.name))
      setTotalTokenAddress(reAtoZ)
      setSortAToZ(true)
    }
  }

  return (
    <>
      <DrawerContainer isOpen={isOpen}>
        <DrawerWrapper isOpen={isOpen}>
          <DrawerHeader>Balance</DrawerHeader>
          <CoinWrapper>
            {sortAToZ ? (
              <ArrowDownCircle cursor="pointer" onClick={handleSort} strokeWidth={0.5} size={30} />
            ) : (
              <ArrowUpCircle cursor="pointer" onClick={handleSort} strokeWidth={0.5} size={30} />
            )}
            <div className="box-token">
              <StyledEthereumLogo src={EthereumLogo} size="24px" />
              {userEthBalance?.toSignificant(4)} <p className="name-coin">DEV</p>{' '}
            </div>
            {totalTokenAddress.map((token: any) => (
              <div className="box-token" key={token.name}>
                <CurrencyLogo currency={token.logo} size={'24px'} />
                {balance[token.address]?.toSignificant(4)}
                <p className="name-coin">{balance[token.address]?.currency?.symbol}</p>
              </div>
            ))}
          </CoinWrapper>
        </DrawerWrapper>
      </DrawerContainer>
      <ArrowWrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {/* <ArrowDrawer  /> */}
        BALANCE
      </ArrowWrapper>
    </>
  )
}

export default DrawerAsset
