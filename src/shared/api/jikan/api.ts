import {AxiosPromise} from 'axios'

import {apiInstance} from './base'
import {AnimeData, PaginationRequest, AnimeSearchResponse, AnimePicturesResponse} from './types'

export const animeApi = {
  getSearch(query: PaginationRequest): Promise<AnimeSearchResponse> {
    return apiInstance.get('/anime', {params: query}).then((res) => res.data)
  },
  getFullByID(id: number): AxiosPromise<AnimeData> {
    return apiInstance.get(`anime/${id}/full`).then((res) => res.data)
  },
  getTop(query: PaginationRequest): Promise<AnimeSearchResponse> {
    return apiInstance.get('/top/anime', {params: query}).then((res) => res.data)
  },
  getPictures(id: number): Promise<AnimePicturesResponse> {
    return apiInstance.get(`/anime/${id}/pictures`).then((res) => res.data)
  },
}
