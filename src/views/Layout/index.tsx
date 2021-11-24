import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classname from 'classnames'
import $ from 'jquery'
import System, { HomeActiveMenu } from '../../store/system'
import logoIconImg from '../../assets/img/logo-icon.svg'
import logoTextImg from '../../assets/img/logo-text.svg'
import twImg from '../../assets/img/icon_twitter.svg'
import mdImg from '../../assets/img/icon_medium.svg'
import liImg from '../../assets/img/icon_linkin.svg'
import './style.scss'

const HEADER_TOP = 200

const Header: React.FC = ({ children }) => {
  const [isTop, setTop] = useState(true)
  const { pageY } = System.useContainer()

  useEffect(() => {
    setTop(pageY < HEADER_TOP)
  }, [pageY])

  return (
    <header className={isTop ? 'top' : ''}>
      <img src={logoIconImg} alt="" />
      <img src={logoTextImg} className="text-img" alt="" />
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
              active: activeHomeMenu === HomeActiveMenu.glance,
            })}
            onClick={() => handleScroll('glance')}
          >
            {t('sider.menu.glance')}
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
              active: activeHomeMenu === HomeActiveMenu.reports,
            })}
            onClick={() => handleScroll('reports')}
          >
            {t('sider.menu.reports')}
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
      <div className="socials">
        <a href={t('sider.links.twitter')} target="">
          <img src={twImg} alt="" />
        </a>
        <a href={t('sider.links.medium')} target="">
          <img src={mdImg} alt="" />
        </a>
        <a href={t('sider.links.linkedin')} target="">
          <img src={liImg} alt="" />
        </a>
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
