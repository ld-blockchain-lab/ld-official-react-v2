import { useState, useEffect } from 'react'
import { createContainer } from 'unstated-next'

export enum HomeActiveMenu {
  home,
  glance,
  portfolio,
  reports,
  team,
}

interface useSystemProps {
  pageY: number
  activeHomeMenu: HomeActiveMenu | undefined
  setActiveHomeMenu: (activeHomeMenu: HomeActiveMenu | undefined) => void
}

function useSystem(): useSystemProps {
  const [pageY, setPageY] = useState(0)
  const [activeHomeMenu, setActiveHomeMenu] = useState<HomeActiveMenu>()

  useEffect(() => {
    const scroll = (): void => {
      setPageY(window.scrollY)
    }
    window.addEventListener('scroll', scroll, false)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [setPageY])

  return {
    pageY,
    activeHomeMenu,
    setActiveHomeMenu,
  }
}

const System = createContainer(useSystem)

export default System
