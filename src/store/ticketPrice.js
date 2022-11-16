import { createSlice } from "@reduxjs/toolkit";

const TicketPrice = createSlice({
  name: "ticketPrice",
  initialState: { ticketPrice: 0 },
  reducers: {
    updateTicketPrice(state, action) {
      const price = action.payload;
      state.ticketPrice = price;
    },
  },
});

export const ticketPriceActions = TicketPrice.actions;

export default TicketPrice;
