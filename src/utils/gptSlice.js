import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
    gptMovieNames: null,
    tmdbResults: null,
  },
  reducers: {
    toggleGptSearchBar: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { gptResultMovieNames, tmdbResults } = action.payload;
      state.gptMovieNames = gptResultMovieNames;
      state.tmdbResults = tmdbResults;
    },
  },
});

export const { toggleGptSearchBar, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
