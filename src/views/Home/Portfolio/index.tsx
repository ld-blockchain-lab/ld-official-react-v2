import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
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
  row-gap: 30px;

  .project {
    display: block;
    text-decoration: none;

    img {
      margin-bottom: 10px;
    }
  }
`

const ProjectGroup: React.FC<{ data: projectGroupData }> = ({ data }) => {
  return (
    <>
      <HomeContentTitle.T2>{data.name}</HomeContentTitle.T2>
      <StyledProjectGroup>
        {data.projects.map((p, i) => (
          <a className="project" href={p.link} target="_blank" key={i}>
            <div>
              <img src={p.icon} alt="" />
            </div>
            <div>
              <span>{p.name}</span>
            </div>
          </a>
        ))}
      </StyledProjectGroup>
    </>
  )
}

export const Portfolio: React.FC = () => {
  const { t } = useTranslation('trans')
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
        <HomeContentTitle.T1>{t('sider.menu.portfolio')}</HomeContentTitle.T1>
        {portfolio.map((group) => (
          <ProjectGroup key={group.name} data={group} />
        ))}
      </div>
    </HomeContentBlock>
  )
}

export default Portfolio
