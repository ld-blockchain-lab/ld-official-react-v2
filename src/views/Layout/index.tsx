import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classname from 'classnames'
import $ from 'jquery'
import System, { HomeActiveMenu } from '../../store/system'
import logoImg from '../../assets/img/logo.svg'
import './style.scss'

const HEADER_TOP = 300

const Header: React.FC = ({ children }) => {
  const [isTop, setTop] = useState(true)
  const { pageY } = System.useContainer()

  useEffect(() => {
    setTop(pageY < HEADER_TOP)
  }, [pageY])

  return (
    <header className={isTop ? 'top' : ''}>
      <img src={logoImg} className="border-img" alt="" />
    </header>
  )
}

const VH = window.innerHeight

const Sider: React.FC = () => {
  const { t } = useTranslation('trans')
  const [top, setTop] = useState(VH)
  const { pageY, activeHomeMenu } = System.useContainer()

  useEffect(() => {
    const yy = Math.min(Math.max(VH - pageY, 0), VH)
    setTop(yy)
  }, [pageY])

  const handleScroll = (id: string): void => {
    const offset = $(`#${id}`).offset()
    if (!offset) return
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: offset.top,
      },
      300
    )
  }

  return (
    <nav style={{ top }}>
      <div className="nav-menu">
        <div>
          <a
            className={classname({
              active: activeHomeMenu === HomeActiveMenu.home,
            })}
            onClick={() => handleScroll('home')}
          >
            {t('sider.menu.home')}
          </a>
        </div>
        <div>
          <a
            className={classname({
              active: activeHomeMenu === HomeActiveMenu.introduction,
            })}
            onClick={() => handleScroll('introduction')}
          >
            {t('sider.menu.introduction')}
          </a>
        </div>
        <div>
          <a
            className={classname({
              active: activeHomeMenu === HomeActiveMenu.highlight,
            })}
            onClick={() => handleScroll('highlight')}
          >
            {t('sider.menu.highlight')}
          </a>
        </div>
        <div>
          <a
            className={classname({
              active: activeHomeMenu === HomeActiveMenu.portfolio,
            })}
            onClick={() => handleScroll('portfolio')}
          >
            {t('sider.menu.portfolio')}
          </a>
        </div>
        <div>
          <a
            className={classname({
              active: activeHomeMenu === HomeActiveMenu.team,
            })}
            onClick={() => handleScroll('team')}
          >
            {t('sider.menu.team')}
          </a>
        </div>
      </div>
    </nav>
  )
}

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Sider />
      {children}
    </>
  )
}
