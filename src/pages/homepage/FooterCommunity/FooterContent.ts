import styled from 'styled-components'
// ` `
//    background-color  : #262A53;
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));
  width: 100%;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  padding: 30px;
`

export const FooterBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #f8c070;

  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 1rem;
  transition: background-color 0.8s ease;
  transition: width 0.8s ease;
  transition: box-shadow 0.5s ease;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`
