import clsx from 'clsx'
import React from 'react'

const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  // eslint-disable-next-line react/prop-types
  className,
  ...otherProps
}) => {
  return (
    <div className={clsx('sticky top-0 bg-white h-[64px] z-10', className)} {...otherProps}>
      {children}
    </div>
  )
}

export default Header
