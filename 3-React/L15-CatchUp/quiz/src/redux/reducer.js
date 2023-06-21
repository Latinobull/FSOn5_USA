import { createSlice } from '@reduxjs/toolkit';
import data from '../data/questions.json';
const initialState = {
  quizData: data.quiz,
  currentQuestion: null,
  index: 0,
  score: 0,
};

const quizReducer = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    grabQuestion: state => {
      state.currentQuestion = state.quizData[state.index];
    },
    answerQuestion: (state, action) => {
      console.log(action.payload === state.currentQuestion.correctAnswer);
      if (action.payload === state.currentQuestion.correctAnswer) {
        state.score += 1;
      }
      state.index += 1;
    },
    endQuiz: () => {
      console.log('end Quiz');
    },
    resetQuiz: state => {
      state.index = 0;
      state.score = 0;
    },
  },
});

export const { grabQuestion, answerQuestion, endQuiz, resetQuiz } =
  quizReducer.actions;
export default quizReducer.reducer;
