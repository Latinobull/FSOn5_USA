import { createSlice } from '@reduxjs/toolkit';
import { logOutUser, signUpUser } from './operators';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        console.log(action.payload);
        console.log(state.isLoggedIn);
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      });
  },
});

export default userSlice.reducer;
