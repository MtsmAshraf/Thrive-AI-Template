// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import languageReducer from './languageSlice';
import loaderReducer from './loaderSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    loader: loaderReducer,
  },
});

export default store;
