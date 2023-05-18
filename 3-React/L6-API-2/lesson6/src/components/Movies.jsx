import { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieContainer from './MovieContainer';
import MovieCard from './MovieCard';
export default function Movies() {
  return (
    <div>
      <h1>Movies</h1>
      <p>Enter a title you want to search for</p>
      <MovieForm />
      <button>Movie</button>
      <button>Series</button>
      <MovieContainer>
        <MovieCard key={item.imdbId}>
          <h3>Title</h3>
          <img src={item.Poster} alt="img" />
          <h4> Released: year</h4>
        </MovieCard>
      </MovieContainer>
    </div>
  );
}
