import './fonts/Mont/Mont-Bold.otf'
import './fonts/Mont/Mont-Light.otf'
import './index.css'

import React, {Suspense} from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {BrowserRouter} from 'react-router-dom'

import {Routing} from 'pages'
import {Layout, Spin} from 'shared/ui'
import {Header} from 'widgets/header'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
    },
  },
})

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Spin size={60} />}>
          <Layout>
            <Header />
            <Routing />
          </Layout>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
