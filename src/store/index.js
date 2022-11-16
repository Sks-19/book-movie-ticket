import { configureStore } from "@reduxjs/toolkit";
import confirmedSeatSlice from "./confirmedSeat";
import seatSlice from "./seatCount";
import SelectedCinemaHall from "./selectedCinemahall";
import SelectedMovie from "./selectedMovie";
import selectedSeatSlice from "./selectedSeat";
import TicketPrice from "./ticketPrice";
import WeekDate from "./weekDate";

const store = configureStore({
  reducer: {
    seat: seatSlice.reducer,
    selected: selectedSeatSlice.reducer,
    confirmed: confirmedSeatSlice.reducer,
    selectedMovie: SelectedMovie.reducer,
    cinemaHall: SelectedCinemaHall.reducer,
    ticketPrice: TicketPrice.reducer,
    weekDate: WeekDate.reducer,
  },
});

export default store;
