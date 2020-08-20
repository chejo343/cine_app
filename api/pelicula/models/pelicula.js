'use strict';
const axios = require('axios')
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      const baseURL = 'https://api.themoviedb.org/3'
      const APIKey = process.env.TMBD_KEY || 'f8a3cbb9e9602956a3ab6c7ec73a6861'
      const urlDetail = `${baseURL}/movie/${data.tmbd_id}?api_key=${APIKey}&language=es`
      const urlCast = `${baseURL}/movie/${data.tmbd_id}/credits?api_key=${APIKey}`
      const urlTrailer = `${baseURL}/movie/${data.tmbd_id}/videos?api_key=${APIKey}`
      const { data: detail } = await axios.get(urlDetail)
      const { data: casting } = await axios.get(urlCast)
      const { data: videos } = await axios.get(urlTrailer)
      data.data = detail
      data.nombre = detail.title
      data.cast = casting.cast
      const youtubeSrc = videos.results.filter(i => i.site === 'YouTube')
      data.youtube_id = youtubeSrc.length > 0 ? youtubeSrc[0].key : null
    }
  }
};
