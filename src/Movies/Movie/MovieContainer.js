import { connect } from 'react-redux'
import Movie from './Movie'
import {
  fetchMovie,
  removeMovie,
  fetchMovieRatings,
  rateAMovie,
  fetchMovieLikes,
  likeAMovie
} from '../../store/movies/actions'
import { isFetching } from '../../store/isFetching/selectors'
import { getIsAuth } from '../../store/auth/selectors'

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  ratingData: state.movies.rating,
  likeData: state.movies.likes,
  isFetchingMovie: isFetching(state, 'movie'),
  isFetchingRating: isFetching(state, 'rating'),
  isFetchingLikes: isFetching(state, 'like'),
  isAuth: getIsAuth(state)
})

const mapDispatchToProps = (dispatch) => ({
  getMovie: (id) => dispatch(fetchMovie(id)),
  deleteMovie: (id, history) => dispatch(removeMovie(id, history)),
  getMovieRating: (id) => dispatch(fetchMovieRatings(id)),
  rateMovies: (id, rating) => dispatch(rateAMovie(id, rating)),
  getMovieLikes: (id) => dispatch(fetchMovieLikes(id)),
  likeMovies: (id) => dispatch(likeAMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
