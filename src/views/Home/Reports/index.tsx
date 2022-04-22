import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import HomeContentBlock from '../../../components/HomeContentBlock'
import HomeContentTitle from '../../../components/HomeContentTitle'
import { HomeActiveMenu } from '../../../store/system'
import serverWalletAPI, {
  reportData,
  SelfReportData,
} from '../../../apis/ServerWalletAPI'
import { Link } from 'react-router-dom'

const StyledP = styled.div`
  font-size: 16px;
  opacity: 0.5;
  margin-bottom: 20px;
  text-align: justify;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`

const StyledTime = styled.div`
  font-size: 16px;
  opacity: 0.3;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

function formatDescription(text: string): string {
  if (text.length > 250) return text.slice(0, 250) + '...'
  return text
}

function formatTime(time: string): string {
  return moment(time).format('ll')
}

export const Reports: React.FC = () => {
  const { t } = useTranslation('trans')
  const [data, setData] = useState<reportData[]>([])
  const [selfData, setSelfData] = useState<SelfReportData[]>([])

  useEffect(() => {
    serverWalletAPI
      .getReports()
      .then(setData)
      .catch((e) => console.log(e))
    serverWalletAPI
      .getSelfReports()
      .then(setSelfData)
      .catch((e) => console.log(e))
  }, [])

  return (
    <HomeContentBlock activeTag={HomeActiveMenu.reports}>
      <div id="reports" className="single-page">
        <HomeContentTitle.T1>{t('sider.menu.reports')}</HomeContentTitle.T1>
        {selfData.map((report) => (
          <div key={report.id} className="report self">
            <HomeContentTitle.T2 className="title-t3" key={report.id}>
              <Link to={`/report/${report.id}`} className="report-link">
                <span>{report.title}</span>
                {report.subTitle && <small>{report.subTitle}</small>}
              </Link>
            </HomeContentTitle.T2>
            <StyledTime>{report.displayDatetime}</StyledTime>
            <StyledP>{report.description}</StyledP>
          </div>
        ))}
        <HomeContentTitle.T1>{t('reports.article')}</HomeContentTitle.T1>
        {data.map((report) => (
          <div key={report.id} className="report">
            <HomeContentTitle.T3 className="title-t3" key={report.id}>
              <a href={report.url} target="_blank" className="report-link">
                {report.title}
              </a>
            </HomeContentTitle.T3>
            <StyledP>{formatDescription(report.description)}</StyledP>
            <StyledTime>{formatTime(report.displayDatetime)}</StyledTime>
          </div>
        ))}
      </div>
    </HomeContentBlock>
  )
}

export default Reports
