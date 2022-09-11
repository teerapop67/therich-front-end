import { ChainId } from 'richsdk'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'
import { Moon, Sun } from 'react-feather'
import styled from 'styled-components'

import Logo from '../../assets/images/Logonew.png'
import { useActiveWeb3React } from '../../hooks'
// import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'

// import { YellowCard } from '../Card'
import Settings from '../Settings'
// import Menu from '../Menu'

import { RowBetween } from '../Row'
import Web3Status from '../Web3Status'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../../pages/homepage/landing'
// import VersionSwitch from './VersionSwitch'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 0 40px;
  top: 0;
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

const StyledThemeIconMoon = styled(Moon)`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px yellow;
    border-radius: 100%;
  }
`

const StyledThemeIconSun = styled(Sun)`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px yellow;
    border-radius: 100%;
  }
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 0.5rem;
`};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  text-decoration: none;
  text-decoration-style: unset;

  :hover {
    cursor: pointer;
  }
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin: 0 10px;
  pointer-events: auto;
`

const NetworkCard = styled.div`
  width: fit-content;
  margin-right: 10px;
  padding: 10px 13px;
`

const UniIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text1};
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: null,
  [ChainId.STANDALONE]: 'Moonbeam Development',
  [ChainId.MOONROCK]: 'Moonrock Rococo',
  [ChainId.MOONBASE]: 'Moonbase Alpha',
  [ChainId.MOONSHADOW]: 'Moonshadow Westend'
}

interface PropsHeader {
  toggleTheme: () => void
  theme: string
}

const Header: React.FC<PropsHeader> = props => {
  const { account, chainId } = useActiveWeb3React()
  const location = useLocation()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  // const [isDark] = useDarkModeManager()

  return (
    <HeaderFrame>
      <RowBetween padding="1rem 1rem 0 1rem">
        <HeaderElement>
          <Title href=".">
            <UniIcon>
              <img style={{ height: 100 }} src={Logo} alt="logo" />
              <h1>THE RICH</h1>
            </UniIcon>
          </Title>
        </HeaderElement>
        {location.pathname === '/' ? (
          <Link to="/swap">
            <Button borderColor="#6c6051">Launch</Button>
          </Link>
        ) : (
          <HeaderControls>
            <HeaderElement>
              <TestnetWrapper>
                {!isMobile && chainId && NETWORK_LABELS[chainId] && (
                  <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>
                )}
              </TestnetWrapper>
              <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
                {account && userEthBalance ? (
                  <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                    {userEthBalance?.toSignificant(4)} DEV
                  </BalanceText>
                ) : null}
                <Web3Status />
              </AccountElement>
            </HeaderElement>
            <HeaderElementWrap>
              {/* <VersionSwitch /> */}
              <Settings />
              {/* <Menu /> */}
              {props.theme === 'dark' ? (
                <StyledThemeIconSun onClick={props.toggleTheme} />
              ) : (
                <StyledThemeIconMoon onClick={props.toggleTheme} />
              )}
            </HeaderElementWrap>
          </HeaderControls>
        )}
      </RowBetween>
    </HeaderFrame>
  )
}

export default Header
