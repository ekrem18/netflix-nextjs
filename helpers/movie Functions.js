const API_KEY = process.env.TMDB_KEY

export const getMovies= asyn(type) =>{
const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;
const res = await fetch(URL)
}