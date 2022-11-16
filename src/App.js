import Home from "./components/home";
import SeatConfirmation from "./components/seatConfirmation";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SeatLayout from "./components/seatLayout";
import MovieDetails from "./components/movieDetails";
import BookingConfirmed from "./components/bookingConfirmed";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cinemahall" element={<MovieDetails />} />
        <Route path="/seatlayout" element={<SeatLayout />} />
        <Route path="/seatconfirmation" element={<SeatConfirmation />} />
        <Route path="/bookingConfirmed" element={<BookingConfirmed />} />
      </Routes>
    </>
  );
}

export default App;
