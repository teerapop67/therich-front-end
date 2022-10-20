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
  allTransactions?: any
  totalUser?: number
}

const OurMission: React.FC<PropsOurMission> = ({ item, animateState, allTransactions, totalUser }) => {
  return (
    <>
      <Content>
        <ContentBox1 style={{ background: '#eff6ff' }}>
          <Img
            src="./images/other/moonbasediagram.png"
            width={400}
            height={350}
            style={{ objectFit: 'contain' }}
            alt="diagram"
          ></Img>
        </ContentBox1>
        <ContentBox2>
          <Box2Items>
            <HeadGreen>{allTransactions.length}</HeadGreen>
            <HeadTextP style={{ color: '#202020' }}>Over {allTransactions.length} Transaction This Month</HeadTextP>
          </Box2Items>
          <Box2Items>
            <HeadGreen>{totalUser}</HeadGreen>
            <HeadTextP style={{ color: '#202020' }}>Total Users</HeadTextP>
          </Box2Items>
        </ContentBox2>
      </Content>
    </>
  )
}

export default OurMission
