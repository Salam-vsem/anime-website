import {AxiosPromise} from 'axios'

import {apiInstance} from './shikimori/base'
import {AnimeByIdResponse, AnimeListResponse} from './types'

const BASE_URL = '/api'

const animeApi = {
  getList(): Promise<AnimeListResponse['data']> {
    return apiInstance
      .get(`${BASE_URL}/animes`, {params: {page: 100, limit: 20}})
      .then((res) => res.data)
  },
  getByID(id: string): AxiosPromise<AnimeByIdResponse> {
    return apiInstance.get(`animes/${id}`).then((res) => res.data)
  },
}

export default animeApi
