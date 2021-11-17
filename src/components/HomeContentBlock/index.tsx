import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import System, { HomeActiveMenu } from '../../store/system'

const Content = styled.div`
  min-height: 100vh;
`

export const HomeContentBlock: React.FC<{ activeTag: HomeActiveMenu }> = ({
  children,
  activeTag,
}) => {
  const domRef = useRef<HTMLDivElement | null>(null)
  const { pageY, setActiveHomeMenu } = System.useContainer()

  useEffect(() => {
    const dom = domRef.current
    if (!dom) return
    const offset = $(dom).offset()
    const outHeight = $(dom).outerHeight()
    if (!offset || !outHeight) return
    const start = offset.top
    const end = start + outHeight
    if (pageY >= start && pageY < end) {
      setActiveHomeMenu(activeTag)
    }
  }, [pageY])

  return <Content ref={domRef}>{children}</Content>
}

export default HomeContentBlock
