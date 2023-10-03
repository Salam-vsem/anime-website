import React, {useMemo} from 'react'

import {SparkIcon} from '../icons'

const ITEMS_AMOUNT = 4

export interface ContentTitleProps {
  title: string
}

const ContentTitle: React.FC<ContentTitleProps> = ({title}) => {
  const textArray = useMemo(() => new Array(ITEMS_AMOUNT).fill(title), [title])

  return (
    <div className="flex items-center h-[60px] bg-yellow-400 border-y-black border-y-2 relative w-100 overflow-hidden">
      <div className="flex absolute w-[200%] overflow-hidden animate-infiniteSlide">
        {textArray.map((text, index) => (
          <div
            key={index}
            className={`w-1/4 flex items-center justify-around text-3xl whitespace-nowrap`}
          >
            <span className="uppercase font-extrabold">{text}</span>
            <SparkIcon />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentTitle
