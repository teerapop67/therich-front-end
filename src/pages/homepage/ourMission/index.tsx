import React from 'react'
import { Box2Items, Content, ContentBox1, ContentBox2 } from './Content'
import { HeadGreen, HeadTextGradient2, HeadTextP } from '../landing/Header'

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
          <HeadTextGradient2>Our Mission</HeadTextGradient2>

          <HeadTextP
            variants={item}
            initial="hidden"
            animate={animateState.ourMission && 'visible'}
            transition={{ duration: 0.7 }}
          >
            This is a project for education. From Bangkok University <br /> Thank you for testing our DeFi project.
            <br />
            Connect Metamask and enjoy our application <br />
            Cristiano Ronaldo Haaland Nunez
          </HeadTextP>
        </ContentBox1>
        <ContentBox2>
          <Box2Items>
            <HeadGreen>80 Billion+ </HeadGreen>
            <HeadTextP style={{ color: '#d1d1d1' }}>Over 8000 Transaction This Month</HeadTextP>
          </Box2Items>
          <Box2Items>
            <HeadGreen>2 Million+</HeadGreen>
            <HeadTextP style={{ color: '#d1d1d1' }}>Total Users</HeadTextP>
          </Box2Items>
          <Box2Items>
            <HeadGreen>20 Million+</HeadGreen>
            <HeadTextP style={{ color: '#d1d1d1' }}>Sharing Swap Fees For Providers</HeadTextP>
          </Box2Items>
        </ContentBox2>
      </Content>
    </>
  )
}

export default OurMission
