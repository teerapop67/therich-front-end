import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  padding: 5px 0;
  width: 100%;
  height: fit-content;
  background: #000000;
`

const FooterWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  opacity: 0.5;

  > p {
    font-size: 14px;
    color: #fff;

    & > a {
      color: #fff;
      font-size: 12px;
      padding-top: 5px;
    }
  }
`

const Footer: React.FC<any> = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <p>
          Copyright &copy; 2022 The Rich <br />
          <a href="https://docs.moonbeam.network/" target="_blank">
            picture by docs.moonbeam
          </a>
        </p>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
