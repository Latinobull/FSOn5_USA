import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postHighscores = createAsyncThunk(
  'highscores/post',
  async ({ score, name }) => {
    try {
      const response = await axios.post(
        'https://648ba28717f1536d65eb1acd.mockapi.io/highscores',
        { score, name }
      );
      return 'Score Added';
    } catch (err) {
      return err;
    }
  }
);

export const getHighscores = createAsyncThunk('highscores/get', async () => {
  try {
    const response = await axios.get(
      'https://648ba28717f1536d65eb1acd.mockapi.io/highscores?sortby=score&order=desc'
    );
    return response.data;
  } catch (err) {
    return err;
  }
});
