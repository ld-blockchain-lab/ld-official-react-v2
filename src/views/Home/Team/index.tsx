import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import teamBgImg from '../../../assets/img/bg_team.png'
import HomeContentBlock from '../../../components/HomeContentBlock'
import HomeContentTitle from '../../../components/HomeContentTitle'
import { HomeActiveMenu } from '../../../store/system'
import twImg from '../../../assets/img/icon_twitter.svg'
import mdImg from '../../../assets/img/icon_medium.svg'
import liImg from '../../../assets/img/icon_linkin.svg'

const StyledTeamContent = styled.div`
  position: relative;
  width: 100%;

  .bg {
    width: 100%;
    position: absolute;
    z-index: 2;

    img {
      width: 100%;
    }
  }

  .text {
    position: relative;
    z-index: 3;
    font-size: 17px;
    line-height: 2;
    padding-top: 80px;

    .desc {
      margin-bottom: 30px;
      text-align: justify;
    }

    a {
      text-decoration: none;
      color: var(--primary-color);
    }
  }

  .socials {
    display: none;

    a {
      margin-right: 12px;
    }
  }

  @media screen and (max-width: 600px) {
    .text {
      padding-top: 0;
      font-size: 14px;
    }
    .text .desc {
      font-size: 16px;
    }
    .socials {
      display: block;
    }
  }
`

export const Team: React.FC = () => {
  const { t } = useTranslation('trans')
  return (
    <HomeContentBlock activeTag={HomeActiveMenu.team}>
      <div id="team" className="single-page">
        <StyledTeamContent>
          <div className="bg">
            <img src={teamBgImg} alt="" />
          </div>
          <div className="text">
            {/* <HomeContentTitle.T1>{t('sider.menu.team')}</HomeContentTitle.T1> */}
            <HomeContentTitle.T2 className="desc">
              {t('home.team.desc_1')}
            </HomeContentTitle.T2>
            <div className="desc">
              <div>
                {'Email: '}
                <a href={`mailto:${t('home.team.email')}`}>
                  {t('home.team.email')}
                </a>
              </div>
              <div>
                {'Twitter: '}
                <a href={t('sider.links.twitter')} target="_blank">
                  {t('home.team.twitter')}
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
          </div>
        </StyledTeamContent>
      </div>
    </HomeContentBlock>
  )
}

export default Team
