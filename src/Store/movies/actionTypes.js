export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'
export const GET_MOVIE = 'GET_MOVIE'
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR'

export const getMovies = (payload) => ({
  type: GET_MOVIES,
  payload
})

export const getMoviesError = () => ({
  type: GET_MOVIES_ERROR
})

export const getMovie = (payload) => ({
  type: GET_MOVIE,
  payload
})

export const getMovieError = () => ({
  type: GET_MOVIE_ERROR
})