import { createSlice } from "@reduxjs/toolkit";

const SelectedCinemaHall = createSlice({
  name: "cinemaHall",
  initialState: { currentCinemaHall: [] },
  reducers: {
    addSelectedCinemaHall(state, action) {
      const cinemaHall = action.payload;
      state.currentCinemaHall = cinemaHall;
    },
  },
});

export const SelectedCinemaHallActions = SelectedCinemaHall.actions;

export default SelectedCinemaHall;
