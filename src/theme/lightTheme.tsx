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
    text1: '#222',
    text2: '#333',
    text3: '#444',
    text4: '#555',
    text5: '#666',

    // backgrounds / greys
    bg1: '#FFF',
    bg2: '#E3DDF1',
    bg3: '#6C7284',
    bg4: '#6C7284',
    bg5: '#41434c',
    // bgMain: 'linear-gradient(to right top, #E3DDF1 70%, #cfa731 30%)',
    bgMain: 'linear-gradient(62deg, #E3DDF1 0%, #E3DDF1 100%)',

    //specialty colors
    modalBG: 'rgba(0,0,0,.425)',
    advancedBG: 'rgba(0,0,0,0.1)',

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

export default function themeLight(): DefaultTheme {
  return {
    ...colors(),

    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },
    title: 'light',

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
