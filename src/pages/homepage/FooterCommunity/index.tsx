import React from 'react'
import { Footer } from './Footer'
import { FooterBox, FooterContent } from './FooterContent'
import { HeadGreen, HeadTextP, HeadTextGradient } from '../landing/Header'
const FooterCommunity: React.FC<any> = () => {
  return (
    <>
      <Footer>
        <HeadTextGradient>Enjoy With The Rich Benefit</HeadTextGradient>
      </Footer>
      <FooterContent>
        <FooterBox>
          <HeadGreen>Provided Liquidity</HeadGreen>
          <HeadTextP style={{ color: '#202020' }}>We provided more rewards for liquidity providers.</HeadTextP>
        </FooterBox>
        <FooterBox>
          <HeadGreen>Super Fair Swap Fees</HeadGreen>
          <HeadTextP style={{ color: '#202020' }}>Never charge you but just raw fees.</HeadTextP>
        </FooterBox>
        <FooterBox>
          <HeadGreen>Rapid and Robust</HeadGreen>
          <HeadTextP style={{ color: '#202020' }}>We are the one and forever.</HeadTextP>
        </FooterBox>
        <FooterBox>
          <HeadGreen>Community Leading</HeadGreen>
          <HeadTextP style={{ color: '#202020' }}>We are the one and forever.</HeadTextP>
        </FooterBox>
      </FooterContent>
    </>
  )
}

export default FooterCommunity
