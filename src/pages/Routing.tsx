import React from 'react'
import {Route, Routes} from 'react-router-dom'

import {AnimeDetailsPage} from './anime-details'
import {HomePage} from './home'

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="anime/:id" element={<AnimeDetailsPage />} />
    </Routes>
  )
}

export default Routing
