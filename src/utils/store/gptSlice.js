import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
    genAIMovieNames: null,
    tmdbResults: null,
  },
  reducers: {
    toggleGptSearchBar: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGenAIMovies: (state, action) => {
      const { genAIResultMovieNames, tmdbResults } = action.payload;
      state.genAIMovieNames = genAIResultMovieNames;
      state.tmdbResults = tmdbResults;
    },
  },
});

export const { toggleGptSearchBar, addGenAIMovies } = gptSlice.actions;
export default gptSlice.reducer;
