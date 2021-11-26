import React from 'react'
import styled from 'styled-components'
import HomeContentBlock from '../../../components/HomeContentBlock'
import { HomeActiveMenu } from '../../../store/system'

const Content = styled.div`
  text-align: center;

  div {
    font-size: 80px;
  }

  @media screen and (max-width: 600px) {
    div {
      font-size: 30px;
    }
  }
`

export const Main: React.FC = () => {
  return (
    <HomeContentBlock activeTag={HomeActiveMenu.home}>
      <div id="home">
        <Content>
          <div>Redefine a Better World</div>
          <div>with Digital Economy</div>
        </Content>
      </div>
    </HomeContentBlock>
  )
}

export default Main
