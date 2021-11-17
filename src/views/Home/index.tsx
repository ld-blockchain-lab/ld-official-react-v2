import React from 'react'
import Main from './Main'
import Glance from './Glance'
import Portfolio from './Portfolio'
import './style.scss'

export const Home: React.FC = () => {
  return (
    <>
      <Main />
      <Glance />
      <Portfolio />
    </>
  )
}
