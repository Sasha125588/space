import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './photo/reducer';
import planetReducer from './planet/reducer';
import userReducer from './auth/user/reducer';



export const store = configureStore({
  reducer: {
    photo: photoReducer,
    planet: planetReducer,
    user: userReducer
  },
});