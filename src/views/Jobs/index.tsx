import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import serverWalletAPI, { JobData } from '../../apis/ServerWalletAPI'
import HomeContentBlock from '../../components/HomeContentBlock'
import HomeContentTitle from '../../components/HomeContentTitle'
import { HomeActiveMenu } from '../../store/system'
import './style.scss'

const Job: React.FC<JobData> = (data) => {
  const { t } = useTranslation('trans')

  return (
    <div className="job">
      <div className="title">{data.title}</div>
      <div className="t2">{t('jobs.responsibilities')}</div>
      <ul className="row">
        {data.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
      <div className="t2">{t('jobs.requirements')}</div>
      <ul className="row">
        {data.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  )
}

export const Jobs: React.FC = () => {
  const { t } = useTranslation('trans')
  const [data, setData] = useState<JobData[]>([])

  useEffect(() => {
    serverWalletAPI
      .getJobs()
      .then(setData)
      .catch((e) => console.log(e))
  }, [])

  return (
    <HomeContentBlock activeTag={HomeActiveMenu.jobs}>
      <div id="jobs" className="single-page">
        <HomeContentTitle.T1>{t('sider.menu.jobs')}</HomeContentTitle.T1>
        {data.map((j) => (
          <Job {...j} key={j.id} />
        ))}
        <div className="email">
          {'Email: '}
          <a href={`mailto:${t('jobs.email')}`}>{t('jobs.email')}</a>
        </div>
      </div>
    </HomeContentBlock>
  )
}
