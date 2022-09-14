import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  padding: 5px 0;
  width: 100%;
  height: fit-content;
  background: #000000;
`

const FooterWrapper = styled.div`
  max-width: 800;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;

  > p {
    font-size: 14px;
  }
`

const Footer: React.FC<any> = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <p>Copyright &copy; 2022 The Rich</p>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
