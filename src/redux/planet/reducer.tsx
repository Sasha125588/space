import { createSlice } from '@reduxjs/toolkit';

const planetSlice = createSlice({
  name: 'planet',
  initialState: {
    currentPlanet: null,
  },
  reducers: {
    setCurrentPlanet: (state, action): any => {
      state.currentPlanet = action.payload;
    }
  },
});

export const { setCurrentPlanet } = planetSlice.actions;
export default planetSlice.reducer;