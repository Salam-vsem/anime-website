import React, {Suspense} from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {BrowserRouter} from 'react-router-dom'

import {Routing} from 'pages'
import {Spin} from 'shared/ui'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Spin width={60} />}>
          <Routing />
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
