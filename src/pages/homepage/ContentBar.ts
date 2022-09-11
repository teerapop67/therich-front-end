import styled from 'styled-components'
// ` `

export const ContentBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #6c6051;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  .slide {
    display: flex;
    width: 70%;
  }
`

export const Items = styled.div`
  text-align: center;
  padding: 20px;
  width: 100%;
  color: white;
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
