import React from 'react'
import Main from './Main'
import Glance from './Glance'
import Portfolio from './Portfolio'
import Reports from './Reports'
import Team from './Team'
import './style.scss'

export const Home: React.FC = () => {
  return (
    <>
      <Main />
      <Glance />
      <Portfolio />
      <Reports />
      <Team />
    </>
  )
}
