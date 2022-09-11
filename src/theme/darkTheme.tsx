import { css, DefaultTheme } from 'styled-components'
//import { useIsDarkMode } from '../state/user/hooks'
import { Colors } from './styled'

export * from './components'

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: '#FFFFFF',
    text2: '#d1d1d1',
    text3: '#6C7284',
    text4: '#565A69',
    text5: '#2C2F36',

    // backgrounds / greys
    bg1: '#212429',
    bg2: '#272332',
    bg3: '#40444F',
    bg4: '#565A69',
    bg5: '#6C7284',
    // bgMain: 'linear-gradient(to right top, #1f2232 70%, #cfa731 30%)',
    // bgMain: 'linear-gradient(to right, #232526, #414345)',
    bgMain: '#2c2d32',

    //specialty colors
    modalBG: 'rgba(0,0,0,.425)',
    advancedBG: 'rgba(0,0,0,0.1)',

    //primary colors
    // primary1: '#2172E5',
    // primary2: '#3680E7',
    // primary3: '#4D8FEA',
    // // primary4: '#376bad70',
    // // primary5: '#153d6f70',
    // primary4: '#222',
    // primary5: '#444',

    // // color text
    // primaryText1: '#6da8ff',

    //primary colors
    primary1: '#BA55D3',
    primary2: '#9932CC',
    primary3: '#8B008B',
    primary4: '#800080',
    primary5: '#4B0082',

    // color text
    primaryText1: '#DA70D6',

    // secondary colors
    secondary1: '#2172E5',
    secondary2: '#17000b26',
    secondary3: '#17000b26',

    // other
    red1: '#FF6871',
    red2: '#F82D3A',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E',

    //shadow
    shadow:
      'inset -8px -8px 60px -5px rgb(21 20 29 / 60%), inset 4px -4px 3px rgb(102 96 119 / 50%), inset -7px 7px 5px -4px #161222;',
    shadow2:
      '-6px 6px 12px rgb(11 9 30 / 50%), 5px -5px 12px rgb(79 74 94 / 30%), inset -6px 6px 12px rgb(11 9 30 / 24%), inset -5px -5px 20px rgb(102 96 119 / 20%);',
    shadow3:
      'inset -8px -8px 60px -5px rgb(21 20 29 / 60%), inset 4px -4px 3px rgb(102 96 119 / 50%), inset -7px 7px 5px -4px #161222;'

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',
  }
}

export default function themeDark(): DefaultTheme {
  return {
    ...colors(),

    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },
    title: 'dark',

    //shadows
    shadow1: '#000',

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `
  }
}
