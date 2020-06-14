import axios from 'axios';

const def = {api_key: '03b8572954325680265531140190fd2a', language: 'ru-RU'};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const moviesApi = {
  getTopMovies: async (params) => {
    Object.assign(params, def);
    let response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {params});
    return response.data;
  },
  getMovieDetails: async (id) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {params: def});
    return response.data;
  },
  getSimilarMovies: async (id) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar`, {params: def});
    return response.data;
  },
  getTestRequest: async () => {
    let count = 0;
    const req = async () => {
      try {
        count++;
        let response = await axios.get(`/timeout`);
        return response.data;
      } catch (e) {
        await sleep(1000)
        return await req()
      }
    };

    while (count < 10) {
      return await req()
    }
  }
};
export {moviesApi}
//https://api.themoviedb.org/3/search/trending?language=ru-RU&query=%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9&api_key=03b8572954325680265531140190fd2a