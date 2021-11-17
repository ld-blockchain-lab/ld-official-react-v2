import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import HomeContentBlock from '../../../components/HomeContentBlock'
import HomeContentTitle from '../../../components/HomeContentTitle'
import { HomeActiveMenu } from '../../../store/system'

const StyledP = styled.div`
  font-size: 17px;
  line-height: 2;

  &::before {
    content: '•';
    margin-right: 6px;
  }
`

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
        <HomeContentTitle.T2>{t('home.cultur.title')}</HomeContentTitle.T2>
        <StyledP>{t('home.cultur.desc')}</StyledP>
      </div>
    </HomeContentBlock>
  )
}

export default Glance
