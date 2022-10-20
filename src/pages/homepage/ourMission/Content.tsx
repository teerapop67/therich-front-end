import styled from 'styled-components'
import { motion } from 'framer-motion'
// ` `

export const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
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
  display: flex;
  width: 40%;
  border-radius: 12px;
  height: 280px;
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
  grid-template-columns: repeat(2, 1fr);
  width: 40%;
  height: auto;
  background-color: #e0eaf3;

  border-radius: 15px;
  padding: 2rem;
  transition: background-color 0.5s ease;
  transition: background-color 0.8s ease;
  transition: width 0.8s ease;
  transition: box-shadow 0.5s ease;
  &:hover {
    box-shadow: rgba(1, 214, 255, 0.4) 5px 5px, rgba(1, 214, 255, 0.3) 10px 10px, rgba(1, 214, 255, 0.2) 15px 15px,
      rgba(1, 214, 255, 0.1) 20px 20px, rgba(1, 214, 255, 0.05) 25px 25px;
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
