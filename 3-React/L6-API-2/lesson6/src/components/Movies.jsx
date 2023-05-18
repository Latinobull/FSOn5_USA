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
        <MovieCard>
          <h3>Title</h3>
          <img src="" alt="img" />
          <h4> Released: year</h4>
        </MovieCard>
      </MovieContainer>
    </div>
  );
}
