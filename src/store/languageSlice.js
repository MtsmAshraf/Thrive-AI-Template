// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'en' ? 'ar' : 'en';
        // window.localStorage.setItem("thrive-ai-mode",state.language)
      
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.language;

export default languageSlice.reducer;
