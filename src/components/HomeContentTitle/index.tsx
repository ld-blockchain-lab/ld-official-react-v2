import React from 'react'
import styled from 'styled-components'

const T1 = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  margin: 80px 0;
`

const T2 = styled.div`
  font-size: 24px;
  margin: 30px 0;
`

const T3 = styled.div`
  font-size: 18px;
  margin: 24px 0;
`

export const HomeContentTitle1: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <T1 className={className}>{children}</T1>
}

export const HomeContentTitle2: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <T2 className={className}>{children}</T2>
}

export const HomeContentTitle3: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <T3 className={className}>{children}</T3>
}

const HomeContentTitle = {
  T1: HomeContentTitle1,
  T2: HomeContentTitle2,
  T3: HomeContentTitle3,
}

export default HomeContentTitle
