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

export interface reportData {
  id: number
  url: string
  title: string
  description: string
  displayDatetime: string
}

export interface JobData {
  id: number
  title: string
  responsibilities: string[]
  requirements: string[]
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

  async getReports(): Promise<reportData[]> {
    const resp = await this.axios.get('/api/v1/reports')
    const data = this.getResponseData<reportData[]>(resp.data)
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
}

const serverWalletAPI = new ServerWalletAPI()

export default serverWalletAPI
