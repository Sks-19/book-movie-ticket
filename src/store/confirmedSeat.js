import { createSlice } from "@reduxjs/toolkit";

const confirmedSeatSlice = createSlice({
  name: "confirmed",
  initialState: { confirmedSeat: [] },
  reducers: {
    updateConfirmedSeat(state, action) {
      const updatedSeat = action.payload;
      state.confirmedSeat = updatedSeat;
    },
  },
});

export const confirmedSeatActions = confirmedSeatSlice.actions;

export default confirmedSeatSlice;
