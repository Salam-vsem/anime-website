import axios from 'axios'

import {IMAGE_API_URL} from 'shared/config'

export const apiInstance = axios.create({
  baseURL: IMAGE_API_URL,
})
