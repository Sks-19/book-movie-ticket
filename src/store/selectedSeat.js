import { createSlice } from "@reduxjs/toolkit";

const selectedSeatSlice = createSlice({
  name: "selected",
  initialState: {
    selectedSeat: [],
  },
  reducers: {
    addSelectedSeat(state, action) {
      const newSelected = action.payload;
      if (state.selectedSeat.includes(newSelected)) {
        const filterSelected = state.selectedSeat.filter(
          (seat) => seat !== newSelected
        );
        state.selectedSeat = filterSelected;
      } else {
        state.selectedSeat.push(newSelected);
      }
    },
    emptySelectedSeat(state) {
      state.selectedSeat = [];
    },
  },
});

export const selectedSeatActions = selectedSeatSlice.actions;

export default selectedSeatSlice;
