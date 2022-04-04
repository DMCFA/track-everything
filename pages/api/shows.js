import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/tv/';
export const imageURL = 'https://image.tmdb.org/t/p/original';
const key = process.env.tmdbApiKey;

// @route    GET "/"
// @desc.    Get popular shows
export const getPopularShows = async () => {
  try {
    const res = await axios.get(`${baseURL}popular?api_key=${key}`);
    const data = res.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};
