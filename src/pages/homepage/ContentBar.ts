import styled from 'styled-components'
// ` `

export const ContentBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #eb8858;
  height: 70px;

  .slide {
    display: flex;
    width: 100%;
  }
`

export const Items = styled.div`
  text-align: center;
  padding: 20px;
  width: 100%;
  color: #202020;
  transition: color 0.8s ease;
  &:hover {
    color: #c70a80;
  }
`

export const ItemsOrange = styled.div`
  text-align: center;
  background-color: #262a53;
  color: white;
`
