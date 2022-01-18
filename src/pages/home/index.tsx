import React from 'react'

import {withSuspenseLoader} from 'shared/lib'

export const HomePage = withSuspenseLoader(
  React.lazy(() => import(/* webpackChunkName: "Home" */ './HomePage')),
)
