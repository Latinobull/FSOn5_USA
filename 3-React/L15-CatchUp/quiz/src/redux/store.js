import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './reducer';
const store = configureStore({
  reducer: quizReducer,
});

export default store;
