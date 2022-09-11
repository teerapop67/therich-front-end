import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useAllTokenBalances } from '../../state/wallet/hooks'
import { ArrowLeft } from 'react-feather'

const DrawerContainer = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 350px;
  overflow: hidden;
  z-index: ${({ isOpen }) => (isOpen ? 3 : 0)};
`

const DrawerWrapper = styled.div<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.3s ease-in-out;
  background: #111;
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
    justify-content: center;
    gap: 10px;
    border: 1px solid yellow;
    color: #fff;

    .name-coin {
      color: red;
    }
  }
  margin-bottom: 30px;
`

const AnimateArrow = keyframes`
    from { transform: translateX(0)} to { transform: translateX(10px)}

`

const ArrowWrapper = styled.span<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${AnimateArrow} 0.3s infinite alternate;
  position: absolute;
  top: 50%;
  left: ${({ isOpen }) => (isOpen ? 0 : '18em')};
  background: red;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #fff;
`

const ArrowDrawer = styled(ArrowLeft)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? null : 'rotateY(180deg)')};
  padding: 5px;
`
const DrawerHeader = styled.div`
  font-weight: bold;
  justify-content: center;
  display: flex;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) inset;
  align-items: center;
  width: 100%;
  font-size: 25px;
  margin: 0;
  height: 80px;
  background-color: #222;
  color: #fff;
`

const DrawerAsset: React.FC<any> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const balance = useAllTokenBalances()

  console.log('is :', isOpen)
  const earth = '0x08B40414525687731C23F430CEBb424b332b3d35'
  const rich = '0x6e3B1C44C888487Ae92cc4651858F0a838Eb69A2'
  const jup = '0x9Aac6FB41773af877a2Be73c99897F3DdFACf576'
  const wdevShow = '0xD909178CC99d318e4D46e7E66a972955859670E1'
  return (
    <>
      <DrawerContainer isOpen={isOpen}>
        <DrawerWrapper isOpen={isOpen}>
          <DrawerHeader>Token Balance</DrawerHeader>
          <CoinWrapper>
            <div className="box-token">
              <p className="name-coin">{balance[rich]?.currency?.symbol}</p>
              {balance[rich]?.toSignificant(4)}
            </div>
            <div className="box-token">
              <p className="name-coin">{balance[earth]?.currency?.symbol} </p>
              {balance[earth]?.toSignificant(4)}
            </div>
            <div className="box-token">
              <p className="name-coin">{balance[jup]?.currency?.symbol}</p>
              {balance[jup]?.toSignificant(4)}
            </div>
            <div className="box-token">
              <p className="name-coin">{balance[wdevShow]?.currency?.symbol}</p>
              {balance[wdevShow]?.toSignificant(4)}
            </div>
          </CoinWrapper>
        </DrawerWrapper>
        <ArrowWrapper isOpen={isOpen}>
          <ArrowDrawer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </ArrowWrapper>
      </DrawerContainer>
    </>
  )
}

export default DrawerAsset
