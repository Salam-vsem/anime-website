// import * as cheerio from 'cheerio'

import {apiInstance} from './base'

export const imageParserApi = {
  search(text: string): Promise<any> {
    return apiInstance.get('/images/search', {params: {text}}).then((res) => {
      if (res.status === 200) {
        // const html = cheerio.load(res.data)
        // return html
      }
      return 'test'
    })
  },
}
