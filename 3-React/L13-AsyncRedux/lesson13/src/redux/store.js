import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './slice';
const store = configureStore({
  reducer: movieSlice,
});

export default store;
