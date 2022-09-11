import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HeaderInfo, HeadTextGradient, HeadTextGradient2, HeadTextP } from './Header'

export const Button = styled.button<{ borderColor: string }>`
    background-color : transparent;
    margin-top : 1rem;
    margin-right : 1rem;
    width : 150px
    color : ${({ theme }) => theme.text1};
    text-decoration : none;
    border : 1px solid ${({ borderColor }) => borderColor};
    text-align : center;
    font-size : 20px;
    cursor : pointer;
    padding: 10px 25px;
    border-radius: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    transition : background-color 0.3s ease;
    transition :  color 0.4s ease;
    transition :  width 0.4s ease;
    transition : box-shadow 0.5s ease;
    &:hover {
        box-shadow: rgba(1, 255 , 146, 0.4) 5px 5px, rgba(1, 255 , 146, 0.3) 10px 10px, rgba(1, 255 , 146, 0.2) 15px 15px, rgba(1, 255 , 146, 0.1) 20px 20px, rgba(1, 255 , 146, 0.05) 25px 25px;
    }
`
const Landing: React.FC<any> = () => {
  return (
    <>
      <HeaderInfo>
        <HeadTextGradient
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          The Rich
        </HeadTextGradient>
        <HeadTextGradient2
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Decentralized Exchange
        </HeadTextGradient2>
        <HeadTextP initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
          Swap and Earn Liquidity with us on MoonBeam Chain.
        </HeadTextP>
        <Link to="/swap">
          <Button borderColor="#6c6051">Launch</Button>
        </Link>

        <Button borderColor="transparent">Documents</Button>
      </HeaderInfo>
    </>
  )
}

export default Landing
