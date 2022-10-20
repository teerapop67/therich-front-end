import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
// ` `

// Green = #CAD315
// Purple = #7900FF
// Red = #C70A80
// Dark purple = #262A53'

// Yellow = #FFEF82

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;
  /* background-image: linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%); */
  @media screen and (max-width: 1040px) {
    flex-direction: column;
    height: auto;
    margin-top: 80px;
  }
`

export const HeaderInfo = styled.div`
  width: 45%;
  height: 400px;
  padding: 0 20px;

  @media screen and (max-width: 1040px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const animateLogo = keyframes`
  from { transform: rotateY(0)}
  to { transform: rotateY(360deg)}
`

export const HeaderInfo2 = styled.div`
  display: flex;
  padding: 0 20px;
  width: 45%;
  height: 400px;
  justify-content: center;
  align-items: start;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }

  & > img {
    object-fit: cover;
    animation: ${animateLogo} 1s infinite alternate;
  }
`

export const HeaderA = styled.a`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  width: 100px;
  background-color: black;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
`
export const HeadText = styled.h1`
  color: ${({ theme }) => theme.text1}
  font-size: 3em;
`

export const HeadGreen = styled.h1`
  color: #202020;
`

export const HeadPurple = styled.h1`
  color: #202020;
  font-size: 3em;
  letter-spacing: 5px;
  transition: text-shadow 0.8s ease;
  &:hover {
    text-shadow: #202020 0.5px 0 30px;
  }
`

export const HeadH2 = styled.h2`
  color: white;
  transition: color 0.5s ease;
  &:hover {
    color: #c70a80;
  }
`

export const HeadTextGradient = styled(motion.h1)`
  font-size: 2.5em;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.text1};
`

const animateText = keyframes`
  0% { text-shadow: none }
  100% { text-shadow: #f10086 0 12px 80px }
  
  /* to {
    text-shadow: 0 0 1px goldenrod, 0 0 2px goldenrod, 0 0 3px goldenrod, 0 0 4px goldenrod, 0 0 5px goldenrod, 0 0 6px goldenrod, 0 0 7px goldenrod;
  } */

`

export const HeadTextGradient2 = styled(motion.h1)`
  font-size: 2.5em;
  margin: 0 0 50px 0;
  color: #fd7687;
  transition: text-shadow 0.5s ease;
  animation: ${animateText} 1s infinite alternate;
`
export const HeadTextGradient1 = styled(motion.h1)`
  font-size: 2.5em;
  margin: 0 0 50px 0;
  color: ${({ theme }) => theme.text1};
`

export const HeadTextP = styled(motion.p)`
  font-size: 1.1em;
  color: ${({ theme }) => theme.text2};
  line-height: 1.75rem;
  font-weight: medium;
  transition: color 0.5s ease;
  /* &:hover {
    color: #fd7687;
  } */
`

export const Button2 = styled.button`
  background-color: #fd7687;
  z-index: 5;
  width: fit-content;
  margin-top: 1rem;
  margin-right: 1rem;
  color: black;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  padding: 10px 25px;
  transition: all 0.4s ease;

  &:hover {
    padding: 10px 40px;
  }
`

export const Button3 = styled.button`
  background-color: #8d65c5;
  z-index: 5;
  width: fit-content;
  margin-top: 1rem;
  margin-right: 1rem;
  color: black;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  padding: 10px 25px;
  transition: all 0.4s ease;

  &:hover {
    padding: 10px 40px;
  }
`

export const Img = styled.img``
