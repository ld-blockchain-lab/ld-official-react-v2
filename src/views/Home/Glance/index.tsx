import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import HomeContentBlock from '../../../components/HomeContentBlock'
import HomeContentTitle from '../../../components/HomeContentTitle'
import icon1 from '../../../assets/img/icon_story_1.svg'
import icon2 from '../../../assets/img/icon_story_2.svg'
import icon3 from '../../../assets/img/icon_story_3.svg'
import icon4 from '../../../assets/img/icon_story_4.svg'
import icon5 from '../../../assets/img/icon_story_5.svg'
import icon6 from '../../../assets/img/icon_story_6.svg'
import icon7 from '../../../assets/img/icon_story_7.svg'
import { HomeActiveMenu } from '../../../store/system'

const StyledP = styled.div`
  font-size: 17px;
  line-height: 2;

  &::before {
    content: '•';
    margin-right: 6px;
  }
`

const StyledFeature = styled.div`
  font-size: 17px;
  line-height: 2;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  & > * {
    vertical-align: middle;
  }

  img {
    display: inline-block;
    height: 24px;
    width: 24px;
    object-fit: contain;
    margin-right: 12px;
  }
`

const features = [
  {
    icon: icon1,
    desc: 'desc_1',
  },
  {
    icon: icon2,
    desc: 'desc_2',
  },
  {
    icon: icon3,
    desc: 'desc_3',
  },
  {
    icon: icon4,
    desc: 'desc_4',
  },
  {
    icon: icon5,
    desc: 'desc_5',
  },
  {
    icon: icon6,
    desc: 'desc_6',
  },
  {
    icon: icon7,
    desc: 'desc_7',
  },
]

export const Glance: React.FC = () => {
  const { t } = useTranslation('trans')
  return (
    <HomeContentBlock activeTag={HomeActiveMenu.glance}>
      <div id="glance" className="single-page">
        <HomeContentTitle.T1>{t('sider.menu.glance')}</HomeContentTitle.T1>
        <HomeContentTitle.T2>{t('home.story.title')}</HomeContentTitle.T2>
        <StyledP>{t('home.story.desc_1')}</StyledP>
        <StyledP>{t('home.story.desc_2')}</StyledP>
        <HomeContentTitle.T2>{t('home.vision.title')}</HomeContentTitle.T2>
        <StyledP>{t('home.vision.desc_1')}</StyledP>
        <StyledP>{t('home.vision.desc_2')}</StyledP>
        <HomeContentTitle.T2>{t('home.feature.title')}</HomeContentTitle.T2>
        {features.map((feature) => (
          <StyledFeature key={feature.desc}>
            <img src={feature.icon} alt="" />
            <span>{t(`home.feature.${feature.desc}`)}</span>
          </StyledFeature>
        ))}
      </div>
    </HomeContentBlock>
  )
}

export default Glance
