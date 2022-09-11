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
  width: 90%;
  height: 300px;
  background-color: #6c6051;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
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
`
