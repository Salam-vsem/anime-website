export interface AnimeListResponse {
  data: AnimeData[]
}

export interface AnimeByIdResponse {
  data: AnimeData
}

export interface AnimeData {
  id: string
  name: string
  russian: string
  description: string
  image: ImageData
  kind: string
  score: string
}

export interface ImageData {
  original: string
  preview: string
  x96: string
  x48: string
}
