import styled from 'styled-components'
import { motion } from 'framer-motion'
// ` `

export const Content = styled.div`
  display: flex;
  width: 90%;
  height: 400px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`

export const ContentBox1 = styled(motion.div)`
  width: 40%;
  height: 300px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    height: fit-content;
    margin: 30px 0;
  }
  @media screen and (max-width: 650px) {
    width: fit-content;
  }
`
export const ContentBox2 = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50%;
  height: auto;
  background-color: #6c6051;

  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: background-color 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: background-color 0.8s ease;
  transition: width 0.8s ease;
  transition: box-shadow 0.5s ease;
  &:hover {
    box-shadow: #584e40 5px 5px, #584e40 10px 10px, #584e40 15px 15px, #584e40 20px 20px, #584e40 25px 25px;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Box2Items = styled.div`
  text-align: center;
  color: white;
  background-color: #6c6051;
`

export const Box2ItemsRed = styled.div`
  text-align: center;
  color: white;
`

export const Box2ItemsPurple = styled.div`
  text-align: center;
  color: white;
`

export const ContentLi = styled.li`
  margin: 20px 0;
  font-size: 1.1em;
  text-decoration: none;
  color: #f2f2f2;
`
