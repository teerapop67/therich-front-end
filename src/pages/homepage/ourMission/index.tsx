import React from 'react'
import { Box2Items, Content, ContentBox1, ContentBox2 } from './Content'
import { HeadGreen, HeadTextP, Img } from '../landing/Header'

export interface PropsOurMission {
  item: {
    visible: {
      opacity: number
      y: number
    }
    hidden: {
      opacity: number
      y: number
    }
  }
  animateState: { ourMission: boolean; education: boolean }
}

const OurMission: React.FC<PropsOurMission> = ({ item, animateState }) => {
  return (
    <>
      <Content>
        <ContentBox1>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/4193/4193266.png"
            width="350"
            height="350"
            alt="wizard-g"
          ></Img>
        </ContentBox1>
        <ContentBox2>
          <Box2Items>
            <HeadGreen>80 Billion+ </HeadGreen>
            <HeadTextP style={{ color: '#202020' }}>Over 8000 Transaction This Month</HeadTextP>
          </Box2Items>
          <Box2Items>
            <HeadGreen>2 Million+</HeadGreen>
            <HeadTextP style={{ color: '#202020' }}>Total Users</HeadTextP>
          </Box2Items>
          <Box2Items>
            <HeadGreen>20 Million+</HeadGreen>
            <HeadTextP style={{ color: '#202020' }}>Sharing Swap Fees For Providers</HeadTextP>
          </Box2Items>
        </ContentBox2>
      </Content>
    </>
  )
}

export default OurMission
