import React, {Suspense} from 'react'
import {useParams} from 'react-router'

import {animeModel} from 'entities/anime-card'
import {Layout, Spin} from 'shared/ui'

const AnimeDetailsPage: React.FC = () => {
  const {id} = useParams()
  const [{data: animeInfo}, {data: animeImages}] = animeModel.useAnimeByID(Number(id))
  const {title_english: title, genres, synopsis, studios, type} = animeInfo?.data || {}
  const pictures = animeImages?.data || []

  return (
    <>
      <div className="grid grid-cols-2 gap-10 box-border justify-between bg-black">
        <Suspense fallback={<Spin />}>
          <div className="hidden md:flex flex-col justify-center pl-20">
            <span className="text-white text-6xl font-bold">{title}</span>
          </div>
          <div
            className="w-full bg-cover md:bg-right bg-no-repeat md:bg-cover min-h-[500px] shadow-[20px_0_50px_0_black_inset]"
            style={{backgroundImage: `url(${pictures[0]?.webp.large_image_url})`}}
          />
        </Suspense>
      </div>
      <Layout.Content className="px-28 pt-9">
        <div className="flex">
          <div className="flex flex-col basis-3/5">
            <span className="text-5xl font-bold mb-9">Сюжет</span>
            {synopsis}
          </div>
          <div className="bg-black w-[2px] min-h-full mx-10 -mt-9" />
          <div className="flex flex-col basis-2/5 gap-3">
            <div>
              <span className="font-bold mr-9">Title:</span>
              <span>{title}</span>
            </div>
            <div>
              <span className="font-bold mr-9">Genres:</span>
              <span>{genres?.map((item) => item.name).join(', ')}</span>
            </div>
            <div>
              <span className="font-bold mr-9">Type:</span>
              <span>{type}</span>
            </div>
            <div>
              <span className="font-bold mr-9">Studios:</span>
              <span>{studios?.map((item) => item.name).join(', ')}</span>
            </div>
          </div>
          <div></div>
        </div>
      </Layout.Content>
    </>
  )
}

export default AnimeDetailsPage
