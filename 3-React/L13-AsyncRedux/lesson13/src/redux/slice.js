import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies, fetchSingleMovie } from './operations';
const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  genre: 'series',
  search: '',
  singleMovie: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    //* OLD ASYNC ACTIONS
    // This is the start of our loading state
    // fetchingInProgress: state => {
    //   state.isLoading = true;
    // },
    // // if data was retrieved then do something with that data
    // fetchingSuccess: (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.movies = action.payload;
    // },
    // // if data wasn't retrieved or an error occured, do something with that error
    // fetchingError: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  //* New ASYNC ACTIONS
  extraReducers: builder => {
    // * Fetching Data for all movies
    builder
      .addCase(fetchMovies.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //* This is fetching data for single Movie
      .addCase(fetchSingleMovie.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSingleMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.singleMovie = action.payload;
      })
      .addCase(fetchSingleMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setSearch, changeGenre } = movieSlice.actions;
export default movieSlice.reducer;
