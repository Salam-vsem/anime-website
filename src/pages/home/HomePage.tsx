import React, {Suspense} from 'react'

import {Layout, Spin} from 'shared/ui'

import AnimeList from './AnimeList'

const Home: React.FC = () => {
  return (
    <Layout.Content title="аниме">
      <Suspense fallback={<Spin />}>
        <AnimeList />
      </Suspense>
    </Layout.Content>
  )
}

export default Home
