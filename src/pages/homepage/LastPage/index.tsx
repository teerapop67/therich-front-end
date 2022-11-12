import React from 'react'
import { Button2, Button3, HeadGreen, HeadTextP, Img } from '../landing/Header'
import styled from 'styled-components'
import { PropsOurMission } from '../ourMission'

export const LastPageContainer = styled.div`
    display : flex;
    width : 90%;
    height 500px;
    justify-content: center;
    align-items : center;
    text-align : center;
    color :white;
    margin-top : 5rem;
    border-radius: 15px;
    background-color: #e0eaf3;

    
    /* background-image: linear-gradient(225deg, #333 0%, #222 50%, #444 100%); */
    @media screen and (max-width: 1100px) {
        height: auto;
        flex-direction: column-reverse;
    }
    transition: box-shadow 0.5s ease;
    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
          <HeadGreen>This is for educational purpose</HeadGreen>
          <HeadTextP
            style={{ color: '#101010' }}
            variants={item}
            initial="hidden"
            animate={animateState.education && 'visible'}
            transition={{ duration: 0.7 }}
          >
            The Rich is developed for educational purpose, <br />
            Click the button below to join our community and source code.
          </HeadTextP>
          <Button2>
            <a style={{ textDecoration: 'none', color: 'black' }} href="https://discord.gg/MZDht3e7" target="_blank">
              Join Discord Community
            </a>
          </Button2>
          <Button3>
            <a
              style={{ textDecoration: 'none', color: 'black' }}
              href="https://github.com/teerapop67/therich-front-end"
              target="_blank"
            >
              Join Github Repository
            </a>
          </Button3>
        </LastLeft>
        <LastRight>
          <Img
            style={{ objectFit: 'cover' }}
            src="./images/other/commu.png"
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
