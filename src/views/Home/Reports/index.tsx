import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import HomeContentBlock from '../../../components/HomeContentBlock'
import HomeContentTitle from '../../../components/HomeContentTitle'
import { HomeActiveMenu } from '../../../store/system'
import serverWalletAPI, {
  ReportJsonData,
  SelfReportData,
} from '../../../apis/ServerWalletAPI'
import { Link } from 'react-router-dom'

const langMap = {
  en: 'English',
  'zh-cn': '简体中文',
}

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

const StyledOtherVer = styled.div`
  font-size: 16px;
  opacity: 0.6;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    margin: 0 6px;
    color: #000;

    &:hover {
      text-decoration: underline;
    }
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
  const [data, setData] = useState<ReportJsonData[]>([])
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
            {report.i18n.length > 1 && (
              <StyledOtherVer>
                <span>Other version:</span>
                {report.i18n
                  .filter((r) => r.lang !== report.lang)
                  .map((r) => (
                    <a href={r.url} target="_blank">
                      [{langMap[r.lang]}]
                    </a>
                  ))}
              </StyledOtherVer>
            )}
            <StyledTime>{formatTime(report.displayDatetime)}</StyledTime>
          </div>
        ))}
      </div>
    </HomeContentBlock>
  )
}

export default Reports
