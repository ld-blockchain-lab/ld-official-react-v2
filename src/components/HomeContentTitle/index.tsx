import React from 'react'
import styled from 'styled-components'

const T1 = styled.div`
  font-size: 28px;
  text-transform: uppercase;
  margin: 80px 0;
`

const T2 = styled.div`
  font-size: 24px;
  margin: 40px 0;
`

export const HomeContentTitle1: React.FC = ({ children }) => {
  return <T1>{children}</T1>
}

export const HomeContentTitle2: React.FC = ({ children }) => {
  return <T2>{children}</T2>
}

const HomeContentTitle = {
  T1: HomeContentTitle1,
  T2: HomeContentTitle2,
}

export default HomeContentTitle
