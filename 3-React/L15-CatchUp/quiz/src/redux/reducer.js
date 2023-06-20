import { createSlice } from '@reduxjs/toolkit';

const state = {
  test: 'test',
};

const quizReducer = createSlice({
  name: 'quiz',
  state,
  reducers: {},
});

export default quizReducer.reducer;
