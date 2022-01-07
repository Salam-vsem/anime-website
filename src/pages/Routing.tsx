import {Route, Routes} from 'react-router-dom'
import React from 'react'

import Home from './Home'

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default Routing
