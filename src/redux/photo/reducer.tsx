import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    currentPhoto: null,
  },
  reducers: {
    setCurrentPhoto: (state, action) => {
      state.currentPhoto = action.payload;
    }
  },
});

export const { setCurrentPhoto } = photoSlice.actions;
export default photoSlice.reducer;