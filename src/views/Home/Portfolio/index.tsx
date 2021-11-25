import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { useTranslation } from 'react-i18next'
import HomeContentBlock from '../../../components/HomeContentBlock'
import HomeContentTitle from '../../../components/HomeContentTitle'
import { HomeActiveMenu } from '../../../store/system'
import serverWalletAPI, {
  portfolioData,
  projectGroupData,
} from '../../../apis/ServerWalletAPI'

const StyledProjectGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 40px;
  row-gap: 50px;
  margin-bottom: 120px;

  .project {
    display: block;
    text-decoration: none;
    min-width: 0;
    color: #000;
    position: relative;
    padding-bottom: 20px;

    img {
      max-width: 100%;
      width: 100%;
      height: 50px;
      object-fit: contain;
    }

    &-name {
      font-size: 12px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      white-space: nowrap;
    }
  }

  &.lg {
    grid-template-columns: repeat(4, 1fr);
  }
`

function getLink(link: string): string | undefined {
  if (!link) return undefined
  if (link === '__NOT_SET__') return undefined
  if (!link.startsWith('http')) return undefined
  return link
}

const ProjectGroup: React.FC<{ data: projectGroupData }> = ({ data }) => {
  return (
    <>
      <HomeContentTitle.T2 className="title-t2">
        {data.name}
      </HomeContentTitle.T2>
      <StyledProjectGroup>
        {data.projects.map((p, i) => (
          <a className="project" href={getLink(p.link)} target="_blank" key={i}>
            <div className="project-icon">
              <img src={p.logoUrl} alt="" />
            </div>
            <div className="project-name">
              <span>{p.name}</span>
            </div>
          </a>
        ))}
      </StyledProjectGroup>
    </>
  )
}

export const Portfolio: React.FC = () => {
  // const { t } = useTranslation('trans')
  const [portfolio, setPortfolio] = useState<portfolioData>([])

  useEffect(() => {
    serverWalletAPI
      .getPortfolio()
      .then(setPortfolio)
      .catch((e) => console.log(e))
  }, [])

  return (
    <HomeContentBlock activeTag={HomeActiveMenu.portfolio}>
      <div id="portfolio" className="single-page">
        {/* <HomeContentTitle.T1>{t('sider.menu.portfolio')}</HomeContentTitle.T1> */}
        {portfolio.map((group) => (
          <ProjectGroup key={group.name} data={group} />
        ))}
        <HomeContentTitle.T2 className="title-t2">Fund</HomeContentTitle.T2>
        <StyledProjectGroup className="lg">
          <a className="project">
            <div className="project-icon">
              <img
                src="//assets.ldcap.zjzsxhy.com/20211124/973b62ee-4ad9-4e61-9f64-f60df9a080fb.png"
                alt=""
              />
            </div>
            <div className="project-name">
              <span>Metaverse Alliance</span>
            </div>
          </a>
          <a className="project">
            <div className="project-icon">
              <img
                src="//assets.ldcap.zjzsxhy.com/20211123/2ed34ffe-c72b-4802-a7b5-6a75494c48e4.png"
                alt=""
              />
            </div>
            <div className="project-name">
              <span>NFT FUND</span>
            </div>
          </a>
        </StyledProjectGroup>
      </div>
    </HomeContentBlock>
  )
}

export default Portfolio
