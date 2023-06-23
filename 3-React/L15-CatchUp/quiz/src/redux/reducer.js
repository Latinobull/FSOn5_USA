import { createSlice } from '@reduxjs/toolkit';
import data from '../data/questions.json';
import { postHighscores, getHighscores } from './operator';
const initialState = {
  quizData: data.quiz,
  currentQuestion: null,
  index: 0,
  score: 0,
  highscores: {
    loading: false,
    allScores: [],
    error: null,
  },
};
/**
 * Pure Function
 * 1. It can not change any data from an external source, variables, external functions
 * 2. It doesnt change the input of what was received in the function
 * 3. It can't do any input output logic to the terminal/ Command Line
 */
let counter = 0;
function test() {
  counter++;
  console.log(counter);
}
test(counter);
const quizReducer = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    grabQuestion: state => {
      state.currentQuestion = state.quizData[state.index];
    },
    answerQuestion: (state, action) => {
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
      /**
       * {
       * ...state,
       * index:0,
       * score: 0,
       * }
       */
    },
  },
  extraReducers: builder => {
    //* Post Highscores
    builder
      .addCase(postHighscores.pending, state => {
        state.highscores.loading = true;
      })
      .addCase(postHighscores.fulfilled, state => {
        state.highscores.loading = false;
        state.highscores.error = null;
      })
      .addCase(postHighscores.rejected, (state, action) => {
        state.highscores.loading = false;
        state.highscores.error = action.payload;
      })
      // * GET Highscores
      .addCase(getHighscores.pending, state => {
        state.highscores.loading = true;
      })
      .addCase(getHighscores.fulfilled, (state, action) => {
        state.highscores.loading = false;
        state.highscores.allScores = action.payload
        state.highscores.error = null;
      })
      .addCase(getHighscores.rejected, (state, action) => {
        state.highscores.loading = false;
        state.highscores.error = action.payload;
      });
  },
});

//? How redux changes the initialstate without breaking the pure function syntax
// const initialState = answerQuestion(initialState, userData )

export const { grabQuestion, answerQuestion, endQuiz, resetQuiz } =
  quizReducer.actions;
export default quizReducer.reducer;
