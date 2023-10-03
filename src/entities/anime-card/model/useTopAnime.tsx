import {compose, flatten, map, path} from 'ramda'
import {useMemo} from 'react'
import {useInfiniteQuery} from 'react-query'

import {animeApi, AnimeData, PaginationRequest} from 'shared/api'

import {ANIME_LIST_QUERY_KEY} from './consts'

const queryParams: Omit<PaginationRequest, 'page'> = {
  limit: 10,
}

export const useTopAnime = () => {
  const {data, ...otherProps} = useInfiniteQuery(
    ANIME_LIST_QUERY_KEY,
    ({pageParam = 1}) => animeApi.getTop({...queryParams, page: pageParam}),
    {
      getNextPageParam: (lastPage) => lastPage.pagination.current_page + 1,
      getPreviousPageParam: (firstPage) => firstPage.pagination.current_page - 1,
      refetchOnMount: false,
    },
  )

  const list = useMemo<AnimeData[] | undefined>(() => {
    if (!data) {
      return
    }

    //@ts-ignore !!!todo разобраться с типизацией
    return compose(flatten, map(path(['data'])), path(['pages']))(data) as AnimeData[]
  }, [data])

  return {data: list, ...otherProps}
}
