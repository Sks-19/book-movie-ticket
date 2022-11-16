import { createSlice } from "@reduxjs/toolkit";

const WeekDate = createSlice({
  name: "weekDate",
  initialState: { weekDate: [] },
  reducers: {
    setWeekDate(state, action) {
      const week = action.payload;
      state.weekDate = week;
    },
  },
});

export const weekDateActions = WeekDate.actions;

export default WeekDate;
