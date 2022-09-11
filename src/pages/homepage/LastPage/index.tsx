import React from 'react'
import { Button2, Button3, HeadTextP, Img } from '../landing/Header'
import styled from 'styled-components'
import { PropsOurMission } from '../ourMission'

export const LastPageContainer = styled.div`
    display : flex;
    width : 100%;
    height 500px;
    justify-content: center;
    align-items : center;
    text-align : center;
    color :white;
    margin-top : 5rem;
    background-color: #2c2d32;
    /* background-image: linear-gradient(225deg, #333 0%, #222 50%, #444 100%); */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    @media screen and (max-width: 1100px) {
        height: auto;
        flex-direction: column-reverse;
    }
 
`
const LastLeft = styled.div`
    width : 60%
    justify-content: center;
    align-items : center;
    text-align : center;
    padding : 1.5rem;
    
    @media screen and (max-width: 1100px) {
        width : 100%;

    }
`

const LastRight = styled.div`
    width : 40%
    justify-content: center;
    align-items : center;
    text-align : center;
    @media screen and (max-width: 1100px) {
        width : 100%;

    }
`
const LastPage: React.FC<PropsOurMission> = ({ item, animateState }) => {
  return (
    <>
      <LastPageContainer>
        <LastLeft>
          <h1 style={{ color: '#fff' }}>This Is For Educational Purpose</h1>
          <HeadTextP
            style={{ color: '#d1d1d1' }}
            variants={item}
            initial="hidden"
            animate={animateState.education && 'visible'}
            transition={{ duration: 0.7 }}
          >
            The Rich is develop for educational purpose <br />
            And we are non-profit project, Blah Blaw Bha <br />
            Click the button below to see more about Moonbeam
          </HeadTextP>
          <Button2>Join Discord Community</Button2>
          <Button3 style={{ color: '#fff' }}>Join Github Repository</Button3>
        </LastLeft>
        <LastRight>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/5149/5149097.png"
            width="400"
            height="400"
            alt="wizard"
          ></Img>
        </LastRight>
      </LastPageContainer>
    </>
  )
}

export default LastPage
