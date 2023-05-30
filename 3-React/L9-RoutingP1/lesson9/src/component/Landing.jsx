import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieForm from './MovieForm';
import MovieContainer from './MovieContainer';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
export default function Landing() {
  const [movieData, setMovieData] = useState([]);
  const [genre, setGenre] = useState('series');
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    if (search === '') return;
    setLoading(true);
    axios
      .get(`https://www.omdbapi.com/?apikey=5aa42c8f&s=${search}&type=${genre}`)
      .then(response => {
        if (response.data.Response === 'True') {
          console.log(response.data);
          setMovieData(response.data.Search);
          setError(false);
          setLoading(false);
        } else {
          setError(true);
          setMovieData([]);
          setLoading(false);
        }
      });
  }, [genre, search]);

  // console.log(movieData);
  return (
    <div>
      <h1>Movies</h1>
      <p>Enter a title you want to search for</p>
      <MovieForm setSearch={setSearch} />
      <button
        disabled={genre === 'movie' ? true : false}
        onClick={() => setGenre('movie')}
      >
        Movie
      </button>
      <button
        disabled={genre === 'series' ? true : false}
        onClick={() => setGenre('series')}
      >
        Series
      </button>
      {error && <h4>There is no movie with that name</h4>}
      {loading && (
        <div className="loader-container">
          <h1>Loading...</h1>
          <div className="spinner"></div>
        </div>
      )}
      <MovieContainer>
        {movieData.map((item, index) => (
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
