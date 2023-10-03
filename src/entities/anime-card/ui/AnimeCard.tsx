import dayjs from 'dayjs'
import React, {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

import {AnimeData} from 'shared/api'

import {toShortSynopsis} from '../lib/toShortSynopsis'

interface Props {
  data: AnimeData
}

const AnimeCard: React.FC<Props> = ({data}) => {
  const navigate = useNavigate()

  const goToDetailsPageHandler = useCallback(
    () => navigate(`anime/${data.mal_id}`),
    [data, navigate],
  )

  return (
    <div className="p-3.5 flex flex-col justify-between outline outline-2 outline-black">
      <div className="flex justify-between mb-3.5 text-xs">
        <span>{dayjs(data.aired.from).format('DD/MM/YY')}</span>
        <span>{data.score}</span>
      </div>
      <div
        className="bg-center bg-contain bg-no-repeat height-100 min-h-[200px] cursor-pointer"
        style={{backgroundImage: `url(${data.images.webp.large_image_url})`}}
        onClick={goToDetailsPageHandler}
      />
      <div className="mt-3.5 flex flex-col">
        <span className="font-bold mb-1">{data.title}</span>
        <span className="text-xs">{toShortSynopsis(data.synopsis)}</span>
      </div>
    </div>
  )
}

export default AnimeCard
