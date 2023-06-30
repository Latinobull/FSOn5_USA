import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './contacts/slice';
import userSlice from './users/userSlice';
const store = configureStore({
  reducer: {
    data: rootReducer,
    user: userSlice,
  },
});

// configureStore({
//   reducer: rootReducer
// })

export default store;
