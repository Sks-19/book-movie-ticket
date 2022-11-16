import { createSlice } from "@reduxjs/toolkit";

const SelectedMovie = createSlice({
  name: "selectedMovie",
  initialState: { currentMovie: [] },
  reducers: {
    setCurrentMovie(state, action) {
      const current = action.payload;
      state.currentMovie = current;
    },
  },
});

export const SelectedMovieActions = SelectedMovie.actions;

export default SelectedMovie;
