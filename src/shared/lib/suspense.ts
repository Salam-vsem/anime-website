/* eslint-disable react/display-name */
import React, {Suspense} from 'react'

import {Spin} from '../ui/spin'

export const withSuspenseLoader =
  <TProps = {}>(Component: React.ComponentType<TProps>) =>
  (props: TProps) =>
    React.createElement(
      Suspense,
      {fallback: React.createElement(Spin)},
      React.createElement(Component, props),
    )
