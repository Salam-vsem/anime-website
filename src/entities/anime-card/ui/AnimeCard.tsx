import React from 'react'

import {AnimeData} from 'shared/api'

interface Props {
  data: AnimeData
}

const Card: React.FC<Props> = (props) => {
  return <>{props.data.name}</>
}

export default Card
