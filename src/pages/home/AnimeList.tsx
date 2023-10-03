import React from 'react'

import {animeModel, AnimeCard} from 'entities/anime-card'
import {useScrollToBottom} from 'shared/lib'
import {Spin} from 'shared/ui'

const AnimeList: React.FC = () => {
  const {data: animeList, fetchNextPage, isFetchingNextPage} = animeModel.useAnimeCards()
  useScrollToBottom(fetchNextPage)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {!!animeList && animeList.map((item) => <AnimeCard key={item.mal_id} data={item} />)}
      </div>
      <div className="h-[60px] flex justify-center items-center">
        {isFetchingNextPage && <Spin />}
      </div>
    </div>
  )
}

export default AnimeList
