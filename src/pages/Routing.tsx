import {Route, Routes} from 'react-router-dom'
import React from 'react'

import {HomePage} from './home'

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  )
}

export default Routing
