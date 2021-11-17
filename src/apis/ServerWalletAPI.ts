import { SERVER_URL } from '../constants'
import axios, { AxiosInstance } from 'axios'
import mockProjectImg from '../assets/img/icon_mock_project.svg'

export interface projectData {
  name: string
  link: string
  icon: string
}

export interface projectGroupData {
  name: string
  projects: projectData[]
}

export type portfolioData = projectGroupData[]

export class ServerWalletAPI {
  private readonly axios: AxiosInstance

  constructor() {
    this.axios = axios.create({ baseURL: SERVER_URL })
  }

  // TODO:
  async getPortfolio(): Promise<portfolioData> {
    const mock: portfolioData = [
      {
        name: 'Metaverse',
        projects: [],
      },
      {
        name: 'Tech infrastructure',
        projects: [],
      },
      {
        name: 'DeFi Eco',
        projects: [],
      },
      {
        name: 'WEB 3.0',
        projects: [],
      },
    ]
    mock.forEach((p) => {
      const ran = Math.round(Math.random() * 20) + 10
      for (let i = 0; i < ran; i++) {
        p.projects.push({
          name: `Project ${i}`,
          link: '#',
          icon: mockProjectImg,
        })
      }
    })

    return await Promise.resolve(mock)
  }
}

const serverWalletAPI = new ServerWalletAPI()

export default serverWalletAPI
