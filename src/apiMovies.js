import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie'
const keyAPI = '0511023512c6ae2508581d7ea4102544';

export const getMovies = async ({ abortController}) => {
    const options = {
        signal: abortController.signal,
        params: {
            api_key: `${keyAPI}`
        }      
    }
    const response = await axios.get('/day', options)
    return response.data.results
}

export const getMovieById = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;

    const options = {
        
        params: {
            api_key: `${keyAPI}`,
            language: 'en-US',
        }      
    }
    const response = await axios.get(url, options)
    console.log(response);
    return response.data.results
}