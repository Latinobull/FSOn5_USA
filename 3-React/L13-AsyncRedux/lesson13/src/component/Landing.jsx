import { useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieContainer from './MovieContainer';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/operations';
import { changeGenre } from '../redux/slice';

export default function Landing() {
  const { movies, isLoading, error, genre, search } = useSelector(
    state => state
  );
  const dispatch = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    if (search === '') return;
    dispatch(fetchMovies({ search, genre }));
  }, [genre, search]);

  // console.log(movieData);
  return (
    <div>
      <h1>Movies</h1>
      <p>Enter a title you want to search for</p>
      <MovieForm />
      <button
        disabled={genre === 'movie' ? true : false}
        onClick={() => dispatch(changeGenre('movie'))}
      >
        Movie
      </button>
      <button
        disabled={genre === 'series' ? true : false}
        onClick={() => dispatch(changeGenre('series'))}
      >
        Series
      </button>
      {error && <h4>There is no movie with that name</h4>}
      {isLoading && (
        <div className="loader-container">
          <h1>Loading...</h1>
          <div className="spinner"></div>
        </div>
      )}
      <MovieContainer>
        {movies.map((item, index) => (
          <MovieCard key={index}>
            <h3>{item.Title}</h3>
            <img src={item.Poster} alt="img" />
            <h4> Released: {item.Year}</h4>
            <button onClick={() => nav(`/single/${item.imdbID}`)}>
              Learn More
            </button>
          </MovieCard>
        ))}
      </MovieContainer>
    </div>
  );
}
