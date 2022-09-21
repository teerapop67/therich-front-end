import React from 'react'
import styled from 'styled-components'

const MeetTeamContainer = styled.div`
  padding: 2rem;
  width: 100%;
  height: fit-content;
`

const MeetTeamWrapper = styled.div`
    max-width: 1024px;
    padding: 5rem 0;
    height: 100%;: ;
    margin: 0 auto;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-gap: 30px;
    }
`

const BoxAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  width: 350px;
  height: 300px;
  background: transparent;
  padding: 10px 14px;
  border-radius: 12px;

  & > h1 {
    margin: 8px 0 0 0;
    font-size: 24px;
  }

  & > img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    object-fit: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`

const MeetTeam: React.FC<any> = () => {
  return (
    <>
      <MeetTeamContainer>
        <MeetTeamWrapper>
          <BoxAvatar>
            <img src="./images/avatar/benz-un.jpg" alt="avatar" />
            <h1>Teerapop Junchean</h1>
            <p>Position: Developer, Founder</p>
          </BoxAvatar>
          <BoxAvatar>
            <img src="./images/avatar/toon.png" alt="avatar" />
            <h1>Pankorn Wangsakun</h1>
            <p>Position: Developer, Founder</p>
          </BoxAvatar>
        </MeetTeamWrapper>
      </MeetTeamContainer>
    </>
  )
}

export default MeetTeam
