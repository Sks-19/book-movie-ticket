import { useDispatch, useSelector } from "react-redux";
import { confirmedSeatActions } from "../store/confirmedSeat";
import { selectedSeatActions } from "../store/selectedSeat";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SeatConfirmation = () => {
  const dispatch = useDispatch();
  const selectedCinemahall = useSelector(
    (state) => state.cinemaHall.currentCinemaHall
  );
  const selectedMovie = useSelector(
    (state) => state.selectedMovie.currentMovie
  );

  const selectedSeat = useSelector((state) => state.selected.selectedSeat);
  const ticketPrice = useSelector((state) => state.ticketPrice.ticketPrice);

  const handleBook = () => {
    dispatch(confirmedSeatActions.updateConfirmedSeat(selectedSeat));
  };

  const totalPrice = selectedSeat?.length * ticketPrice;
  const toPayPrice = totalPrice - (18 / 100) * totalPrice;

  return (
    <>
      <div className="container pb-5">
        <section className="py-2">
          <NavLink to="/seatlayout" className="h6">
            <IoIosArrowBack />
          </NavLink>
          <span className="px-2">Almost there!</span>
        </section>
        <div className="card">
          <div className="card-body">
            {selectedMovie?.map((movie) => (
              <>
                <img
                  src={movie.image}
                  alt="movie-card"
                  width="120px"
                  height="120px"
                  style={{ float: "right", borderRadius: "5px" }}
                />
                <h5 className="card-title">{movie.name}</h5>
                <span className="card-text text-secondary">
                  {movie.language},&nbsp;{movie.Resolution}
                </span>
              </>
            ))}

            <p className="card-text">
              {selectedCinemahall?.showDate.slice(0, 3)},
              {selectedCinemahall?.showDate.slice(3)}&nbsp;|&nbsp;
              <span className="card-text">
                {selectedCinemahall?.bookingTime}
              </span>
            </p>
            <p className="text-secondary">
              {selectedCinemahall?.cinemaHall}
              <br />
              (SCREEN 1)
            </p>

            <p className="card-text">
              <span>Seats - </span>
              {selectedSeat?.map((seat) => (
                <span>{seat}, </span>
              ))}
            </p>
          </div>
          <hr />
          <section className="m-2">
            <h5 className="text-white">Booking Summary</h5>
            <p>
              {selectedSeat?.length} Tickets
              <span style={{ float: "right" }}>
                <FaRupeeSign />
                {totalPrice}
              </span>
            </p>
            <p>
              Taxes & Fees
              <span style={{ float: "right" }}>
                <FaRupeeSign />
                {(18 / 100) * totalPrice}
              </span>
            </p>
          </section>
        </div>
      </div>

      <div className="fixed-bottom p-4">
        <p>
          Total
          <span style={{ float: "right" }}>
            <FaRupeeSign />
            {toPayPrice}
          </span>
        </p>
        <NavLink
          to="/bookingConfirmed"
          className="btn btn-primary w-100"
          onClick={handleBook}
        >
          Proceed to Pay <FaRupeeSign />
          {toPayPrice}
        </NavLink>
      </div>
    </>
  );
};

export default SeatConfirmation;
