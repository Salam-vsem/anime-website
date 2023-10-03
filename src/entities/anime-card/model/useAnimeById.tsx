import {QueryObserverOptions, useQueries} from 'react-query'

import {animeApi, AnimeByIdResponse, AnimePicturesResponse} from 'shared/api'

import {ANIME_BY_ID_QUERY_KEY} from './consts'

const getQueryOption = <T extends object>(
  queryKey: QueryObserverOptions['queryKey'],
  queryFn: QueryObserverOptions<T>['queryFn'],
): QueryObserverOptions<T> => ({
  queryKey,
  queryFn,
  cacheTime: 1,
})

export const useAnimeByID = (id: number) =>
  useQueries([
    getQueryOption<AnimeByIdResponse>([ANIME_BY_ID_QUERY_KEY, 'info'], () =>
      animeApi.getFullByID(id),
    ),
    getQueryOption<AnimePicturesResponse>([ANIME_BY_ID_QUERY_KEY, 'pictures'], () =>
      animeApi.getPictures(id),
    ),
  ])
