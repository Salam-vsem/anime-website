import axios from 'axios'

import {ANIME_API_URL} from 'shared/config'

// Потенциально, можно передавать accessToken
export const apiInstance = axios.create({
  baseURL: ANIME_API_URL,
})
