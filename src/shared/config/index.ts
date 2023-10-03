const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }
  return process.env[key] || ''
}

export const ANIME_API_URL = getEnvVar('REACT_APP_API_URL')
export const IMAGE_API_URL = getEnvVar('REACT_APP_IMAGE_API_URL')
