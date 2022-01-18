import React, {Suspense} from 'react'

import {useAnimeCards, AnimeCard} from 'entities/anime-card'
import {Spin} from 'shared/ui'

const Home: React.FC = () => {
  const {data: animeList, isSuccess} = useAnimeCards()

  return (
    <Suspense fallback={<Spin />}>
      {isSuccess && animeList?.map((item) => <AnimeCard key={item.id} data={item} />)}
    </Suspense>
  )
}

export default Home
