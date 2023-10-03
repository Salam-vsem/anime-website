import React from 'react'

import {withSuspenseLoader} from 'shared/lib'

export const AnimeDetailsPage = withSuspenseLoader(
  React.lazy(() => import(/* webpackChunkName: "AnimeDetailsPage" */ './AnimeDetailsPage')),
)
