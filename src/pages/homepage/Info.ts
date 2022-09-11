import styled from 'styled-components'

export const Info = styled.div`
  color: #fff;
  min-height: 600px;
`

export const InfoContainer = styled.div`
  max-width: 1500px;
  margin-top: 0;
  margin: auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoBox = styled.div`
  width: 500px;
  background: #fff;
  color: #434343;
  border-radius: 10px;
  margin: 20px 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
  padding: 15px 20px;
  self-align: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: translateY(-7px);
  }
`

export const InfoI = styled.i`
  margin-right: 10px;
`

export const InfoHead1 = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0rem;
  text-transform: capitalize;
  text-shadow: rgb(1 1 1) 0px 0px 0.5rem;
`
