import { SERVER_URL } from '../constants'
import axios, { AxiosInstance } from 'axios'
// import mockProjectImg from '../assets/img/icon_mock_project.svg'

export interface JsonResponseData<T = any> {
  success: boolean
  data?: T
  error?: {
    message: string
    code: string | number
  }
}

export interface projectData {
  name: string
  link: string
  logoUrl: string
}

export interface projectGroupData {
  name: string
  iconScale: number
  projects: projectData[]
}

export type portfolioData = projectGroupData[]

export interface ReportItemJsonData {
  id: number
  url: string
  lang: 'en' | 'zh-cn'
  title: string
  description: string
  displayDatetime: string
}

export interface ReportJsonData extends ReportItemJsonData {
  i18n: ReportItemJsonData[]
}

export interface SelfReportData {
  id: number
  title: string
  subTitle: string | null
  description: string
  displayDatetime: string
}

export interface JobData {
  id: number
  title: string
  responsibilities: string[]
  requirements: string[]
}

export interface CustomerJsonData {
  id: number
  name: string
  email: string
  role: string
  source: string
}

export class ServerWalletAPI {
  private readonly axios: AxiosInstance

  constructor() {
    this.axios = axios.create({ baseURL: SERVER_URL })
  }

  private getResponseData<T>(data: JsonResponseData<T>): T | undefined | null {
    if (data.success) {
      return data.data
    }
    return null
  }

  // TODO:
  async getPortfolio(): Promise<portfolioData> {
    const resp = await this.axios.get('/api/v1/portfolio')
    const data = this.getResponseData<portfolioData>(resp.data)
    if (data) return data
    throw new Error('fetch error')
    // const mock: portfolioData = [
    //   {
    //     name: 'Metaverse',
    //     projects: [],
    //   },
    //   {
    //     name: 'Tech infrastructure',
    //     projects: [],
    //   },
    //   {
    //     name: 'DeFi Eco',
    //     projects: [],
    //   },
    //   {
    //     name: 'WEB 3.0',
    //     projects: [],
    //   },
    // ]
    // mock.forEach((p) => {
    //   const ran = Math.round(Math.random() * 20) + 10
    //   for (let i = 0; i < ran; i++) {
    //     p.projects.push({
    //       name: `Project ${i}`,
    //       link: '#',
    //       icon: mockProjectImg,
    //     })
    //   }
    // })

    // return await Promise.resolve(mock)
  }

  async getReports(): Promise<ReportJsonData[]> {
    const resp = await this.axios.get('/api/v1/reports2')
    const data = this.getResponseData<ReportJsonData[]>(resp.data)
    if (data) return data
    throw new Error('fetch error')
  }

  async getSelfReports(): Promise<SelfReportData[]> {
    const resp = await this.axios.get('/api/v1/selfreports')
    const data = this.getResponseData<SelfReportData[]>(resp.data)
    if (data) return data
    throw new Error('fetch error')
  }

  async getSelfReport(id: string): Promise<SelfReportData> {
    const resp = await this.axios.get(`/api/v1/selfreport/${id}`)
    const data = this.getResponseData<SelfReportData>(resp.data)
    if (data) return data
    throw new Error('fetch error')
  }

  async getJobs(): Promise<JobData[]> {
    const resp = await this.axios.get('/api/v1/jobs')
    const data = this.getResponseData<JobData[]>(resp.data)
    if (data) {
      return data
    }
    return []
  }

  async addCustomer(
    customer: Omit<CustomerJsonData, 'id'>
  ): Promise<{ file: string }> {
    const resp = await this.axios.post('/api/v1/customer', customer)
    const data = this.getResponseData<{ file: string }>(resp.data)
    if (data) {
      return data
    }
    return { file: '' }
  }
}

const serverWalletAPI = new ServerWalletAPI()

export default serverWalletAPI
