import React from 'react'
// import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import HomeContentBlock from '../../../components/HomeContentBlock'
import HomeContentTitle from '../../../components/HomeContentTitle'
import { HomeActiveMenu } from '../../../store/system'

export const Reports: React.FC = () => {
  const { t } = useTranslation('trans')
  return (
    <HomeContentBlock activeTag={HomeActiveMenu.reports}>
      <div id="reports" className="single-page">
        <HomeContentTitle.T1>{t('sider.menu.reports')}</HomeContentTitle.T1>
      </div>
    </HomeContentBlock>
  )
}

export default Reports
