import axios from 'axios';
import { fetchingError, fetchingInProgress, fetchingSuccess } from './slice';
import { createAsyncThunk } from '@reduxjs/toolkit';
//* Old Async redux operation
// export function fetchMovies(search, genre) {
//   return async dispatch => {
//     try {
//       dispatch(fetchingInProgress());
//       const response = await axios.get(
//         `https://www.omdbapi.com/?apikey=5aa42c8f&s=${search}&type=${genre}`
//       );
//       dispatch(fetchingSuccess(response.data.Search));
//     } catch (err) {
//       dispatch(fetchingError(err));
//     }
//   };
// }
//* New Async redux operation

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async ({ search, genre }) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=5aa42c8f&s=${search}&type=${genre}`
      );
      console.log(search, genre);
      return response.data.Search;
    } catch (err) {
      throw err;
    }
  }
);

export const fetchSingleMovie = createAsyncThunk(
  'movie/fetchSingleMovie',
  async ({ id }) => {
    console.log(id)
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=5aa42c8f&i=${id}`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);
