import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routing from 'pages/Routing'
import {Spin} from 'shared/ui'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin width={60} />}>
        <Routing />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
