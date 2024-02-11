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

export const getMovieById = async ({ movieId, abortController }) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;

    const options = {
        signal: abortController.signal,
        params: {
            api_key: `${keyAPI}`,
            language: 'en-US',
        }      
    }
    const response = await axios.get(url, options)
    // console.log(response.data);
    return response.data;
}

export const getMovieCasts = async ({ movieId, abortController }) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}//credits`;

    const options = {
        signal: abortController.signal,
        params: {
            api_key: `${keyAPI}`,
            language: 'en-US',
        }      
    }
    const response = await axios.get(url, options)
    console.log(response.data.cast);
    return response.data.cast;
    
}

export const getMovieReviews = async ({ movieId, abortController }) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

    const options = {
        signal: abortController.signal,
        params: {
            api_key: `${keyAPI}`,
            language: 'en-US',
        }      
    }
    const response = await axios.get(url, options)
    console.log(response.data.results);
    return response.data.results;
    
}