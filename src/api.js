import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const PERSONAL_KEY = '609d1839c2d0b1f6de268c884bce6c9e';


const fetchTrandingMovies = async () => {
    const response = await axios.get(`/trending/all/day?language=en-US&api_key=${PERSONAL_KEY}`)

    return response.data.results;
}

const searchMovies = async (query) => {
    const response = await axios.get(`/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${PERSONAL_KEY}`)

    return response.data.results;
}



const getMovieDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?language=en-US&api_key=${PERSONAL_KEY}`)

    return response.data;
}



const getMovieCredits = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?language=en-US&api_key=${PERSONAL_KEY}`)

    return response.data.cast;
}

const getMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?language=en-US&page=1&api_key=${PERSONAL_KEY}`)

    return response.data;
}


const api = { fetchTrandingMovies, searchMovies, getMovieDetails, getMovieCredits, getMovieReviews };

export default api;



