// loaderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loader: true,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    toggleLoader: (state, value) => {
      state.loader = state.loader === true ? false : null;
        // window.localStorage.setItem("thrive-ai-mode",state.loader)
      
    },
  },
});

export const { toggleLoader } = loaderSlice.actions;
export const selectLoader = (state) => state.loader.loader;

export default loaderSlice.reducer;
