export interface PaginationRequest {
  page: number
  limit?: number
}

export interface Pagination {
  current_page: number
  last_visible_page: number
  has_next_page: boolean
}

export interface AnimeSearchResponse {
  pagination: Pagination
  data: AnimeData[]
}

export interface AnimeByIdResponse {
  data: AnimeData
}

export interface AnimePicturesResponse {
  data: Image[]
}

export interface AnimeData {
  mal_id: number
  url: string
  images: Image
  trailer: Trailer
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: Aired
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
  season: string
  year: number
  broadcast: Broadcast
  producers: Demographic[]
  licensors: Demographic[]
  studios: Demographic[]
  genres: Demographic[]
  explicit_genres: Demographic[]
  themes: Demographic[]
  demographics: Demographic[]
  relations: Relation[]
  theme: Theme
  external: External[]
}

export interface Aired {
  from: string
  to: string
  prop: Prop
}

export interface Prop {
  from: From
  to: From
  string: string
}

export interface From {
  day: number
  month: number
  year: number
}

export interface Broadcast {
  day: string
  time: string
  timezone: string
  string: string
}

export interface Demographic {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface External {
  name: string
  url: string
}

export type ImageType = 'jpg' | 'webp'

export type Image = Record<ImageType, ImageData>

export interface ImageData {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Relation {
  relation: string
  entry: Demographic[]
}

export interface Theme {
  openings: string[]
  endings: string[]
}

export interface Trailer {
  youtube_id: string
  url: string
  embed_url: string
}
