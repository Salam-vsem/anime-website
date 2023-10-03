import clsx from 'clsx'
import React from 'react'

import Content from './Content'
import Header from './Header'

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  // eslint-disable-next-line react/prop-types
  className,
  ...otherProps
}) => {
  return (
    <div className={clsx('flex flex-col flex-auto', className)} {...otherProps}>
      {children}
    </div>
  )
}

export default Object.assign(Layout, {Content, Header})
