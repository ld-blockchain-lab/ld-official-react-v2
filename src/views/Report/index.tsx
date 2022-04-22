import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import serverWalletAPI, { SelfReportData } from '../../apis/ServerWalletAPI'
import HomeContentBlock from '../../components/HomeContentBlock'
import HomeContentTitle from '../../components/HomeContentTitle'
import CommonButton from '../../components/CommonButton'
import CommonInput from '../../components/CommonInput'
import CommonRadio from '../../components/CommonRadio'
import { HomeActiveMenu } from '../../store/system'
import './style.scss'

export const Report: React.FC = () => {
  const { t } = useTranslation('trans')
  const [formVisible, showForm] = useState(false)
  const [data, setData] = useState<SelfReportData>()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState<string[]>([])

  const [submitFinish, setSubmitFinish] = useState(false)

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    serverWalletAPI
      .getSelfReport(id)
      .then(setData)
      .catch((e) => console.log(e))
  }, [])

  const canSubmit = email && name && role.length > 0

  const handleSubmit = (): void => {
    if (!canSubmit) return
    serverWalletAPI
      .addCustomer({
        email,
        name,
        role: role.join(','),
        source: `selfreport::${id}`,
      })
      .then((resp) => {
        if (resp.file) {
          window.open(resp.file, '_blank')
        }
        setSubmitFinish(true)
      })
      .catch((e) => console.log(e))
  }

  return (
    <HomeContentBlock activeTag={HomeActiveMenu.reports}>
      {data && (
        <div id="report" className="single-page">
          <div className="container">
            <div className="content">
              <div className="titles">
                <HomeContentTitle.T1 className="title">
                  {data.title}
                </HomeContentTitle.T1>
                <HomeContentTitle.T2 className="sub-title">
                  {data.subTitle}
                </HomeContentTitle.T2>
                <HomeContentTitle.T3 className="time">
                  {data.displayDatetime}
                </HomeContentTitle.T3>
              </div>
              <div className="description">{data.description}</div>
            </div>
            {formVisible ? (
              <div className="form">
                <div className="desc">{t('reports.form.desc1')}</div>
                <div className="row">
                  <div className="label">{t('reports.form.email')}</div>
                  <div className="input">
                    <CommonInput
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="label">{t('reports.form.name')}</div>
                  <div className="input">
                    <CommonInput
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="label">{t('reports.form.role')}</div>
                  <div className="input select">
                    <CommonRadio
                      values={role}
                      onChange={(values) => setRole(values as string[])}
                      options={[
                        {
                          text: t('reports.form.roles.developer'),
                          value: 'developer',
                        },
                        {
                          text: t('reports.form.roles.investor'),
                          value: 'investor',
                        },
                        {
                          text: t('reports.form.roles.trader'),
                          value: 'trader',
                        },
                        {
                          text: t('reports.form.roles.employed'),
                          value: 'employed',
                        },
                        { text: t('reports.form.roles.other'), value: 'other' },
                      ]}
                      multi
                    />
                  </div>
                </div>
                <div className="desc">{t('reports.form.desc2')}</div>
                <div className="submit">
                  {submitFinish ? (
                    <div className="success">{t('reports.success')}</div>
                  ) : (
                    <CommonButton
                      className="large"
                      disabled={!canSubmit}
                      onClick={handleSubmit}
                    >
                      {t('reports.submit')}
                    </CommonButton>
                  )}
                </div>
              </div>
            ) : (
              <div className="read">
                <CommonButton className="large" onClick={() => showForm(true)}>
                  {t('reports.read')}
                </CommonButton>
              </div>
            )}
          </div>
        </div>
      )}
    </HomeContentBlock>
  )
}
