import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './photo/reducer';


export const store = configureStore({
  reducer: {
    photo: photoReducer
  },
});