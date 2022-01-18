import {useQuery} from 'react-query'

import {animeApi} from 'shared/api'

export const useAnimeCards = () => useQuery('anime-list', animeApi.getList)
