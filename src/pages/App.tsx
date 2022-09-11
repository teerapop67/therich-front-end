import React, { Suspense, useEffect, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import Header from '../components/Header'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import Swap from './Swap'
import Homepage from './homepage/index'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
// import { updateUserDarkMode } from '../state/user/actions'
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, AppState } from '../state'
import { ThemeProvider } from 'styled-components'
import dark from '../theme/darkTheme'
import light from '../theme/lightTheme'
import { ThemedGlobalStyle } from '../theme'
import { useActiveWeb3React } from '../hooks'
import DrawerAsset from '../components/DrawerAsset'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding-top: 150px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding: 16px;
  `};
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  const darkObject = dark()
  const lightObject = light()
  const location = useLocation()
  // const dispatch = useDispatch<AppDispatch>()

  // dispatch(updateUserDarkMode({ userDarkMode: true }))
  // const theme = useSelector<AppState, AppState['user']['userDarkMode']>(state => state.user.userDarkMode)
  const [theme, setTheme] = useState(darkObject)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightObject : darkObject)
    if (theme.title === 'dark') {
      localStorage.setItem('themeMode', JSON.stringify(lightObject))
    } else {
      localStorage.setItem('themeMode', JSON.stringify(darkObject))
    }
  }

  useEffect(() => {
    const storageVal: any = localStorage.getItem('themeMode')
    const parseVal = JSON.parse(storageVal)
    if (storageVal) {
      if (parseVal.title === 'dark') {
        setTheme(darkObject)
      } else {
        console.log('PAS: ', parseVal.title)
        setTheme(lightObject)
      }
    }
  }, [])

  const { account } = useActiveWeb3React()

  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <ThemedGlobalStyle />

        <Route component={GoogleAnalyticsReporter} />
        <Route component={DarkModeQueryParamReader} />
        <AppWrapper>
          <HeaderWrapper>
            <Header toggleTheme={toggleTheme} theme={theme.title} />
          </HeaderWrapper>
          <BodyWrapper>
            <Popups />
            <Web3ReactManager>
              <Switch>
                <Route exact strict path="/" component={Homepage} />
                <Route exact strict path="/swap" component={Swap} />
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/find" component={PoolFinder} />
                <Route exact strict path="/pool" component={Pool} />
                <Route exact strict path="/create" component={RedirectToAddLiquidity} />
                <Route exact path="/add" component={AddLiquidity} />
                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Route component={RedirectPathToSwapOnly} />
              </Switch>
            </Web3ReactManager>
            <Marginer />
            {location.pathname !== '/' ? account && <DrawerAsset /> : null}
          </BodyWrapper>
        </AppWrapper>
      </ThemeProvider>
    </Suspense>
  )
}
