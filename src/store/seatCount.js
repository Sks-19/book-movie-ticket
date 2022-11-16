import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seat",
  initialState: { rowCount: [9, 8, 7, 6, 5, 4, 3, 2, 1] },
  reducers: {
    addRow(state, action) {
      const newRowCount = action.payload;
      state.rowCount = newRowCount;
    },
  },
});

export const seatActions = seatSlice.actions;

export default seatSlice;
