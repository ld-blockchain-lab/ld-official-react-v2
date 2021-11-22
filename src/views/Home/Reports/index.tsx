import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import HomeContentBlock from '../../../components/HomeContentBlock'
import HomeContentTitle from '../../../components/HomeContentTitle'
import { HomeActiveMenu } from '../../../store/system'
import serverWalletAPI, { reportData } from '../../../apis/ServerWalletAPI'

export const Reports: React.FC = () => {
  const { t } = useTranslation('trans')
  const [data, setData] = useState<reportData[]>([])

  useEffect(() => {
    serverWalletAPI
      .getReports()
      .then(setData)
      .catch((e) => console.log(e))
  }, [])

  console.log(data)

  return (
    <HomeContentBlock activeTag={HomeActiveMenu.reports}>
      <div id="reports" className="single-page">
        <HomeContentTitle.T1>{t('sider.menu.reports')}</HomeContentTitle.T1>
        {data.map((report) => (
          <HomeContentTitle.T2 key={report.id}>
            <a href={report.url} target="_blank" className="report-link">
              {report.title}
            </a>
          </HomeContentTitle.T2>
        ))}
      </div>
    </HomeContentBlock>
  )
}

export default Reports
