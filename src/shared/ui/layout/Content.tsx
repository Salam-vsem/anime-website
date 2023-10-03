import React from 'react'

import ContentTitle, {ContentTitleProps} from './ContentTitle'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: ContentTitleProps['title']
}

const Content: React.FC<Props> = ({children, title, ...otherProps}) => {
  return (
    <>
      {!!title && <ContentTitle title={title} />}
      <div className="px-2 md:px-5" {...otherProps}>
        {children}
      </div>
    </>
  )
}

export default Content
