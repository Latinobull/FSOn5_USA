import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleMovie } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';

export default function SingleMovie() {
  const { movieID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(state => state.singleMovie);
  useEffect(() => {
    dispatch(fetchSingleMovie({ id: movieID }));
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.Title}</h1>
          <img src={data.Poster} alt="movie image" />
          <h4>{data.Plot}</h4>
          <h5>Released: {data.Released}</h5>
          <h5>Length: {data.Runtime}</h5>
          <h6>Rating: {data.imdbRating}</h6>
        </div>
      )}
    </div>
  );
}
