import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectedSeatActions } from "../store/selectedSeat";

const BookingConfirmed = () => {
  const dispatch = useDispatch();
  const selectedCinemahall = useSelector(
    (state) => state.cinemaHall.currentCinemaHall
  );
  const selectedMovie = useSelector(
    (state) => state.selectedMovie.currentMovie
  );

  const selectedSeat = useSelector((state) => state.selected.selectedSeat);

  const handleSelectedSeat = () => {
    dispatch(selectedSeatActions.emptySelectedSeat());
  };
  return (
    <>
      <section className="p-4" style={{ textAlign: "center" }}>
        <h6 className="text-success">Your booking is confirmed</h6>
        <p className="text-secondary">
          Booking ID&nbsp;<span className="text-white">TEAJJ5A</span>
        </p>
      </section>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="card" style={{ width: "80vw" }}>
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
              {selectedCinemahall?.showDate.slice(0, 3)},{" "}
              {selectedCinemahall?.showDate.slice(3)}&nbsp;|&nbsp;
              <span className="card-text">
                {selectedCinemahall?.bookingTime}
              </span>
            </p>
            <p className="text-secondary">{selectedCinemahall?.cinemaHall}</p>

            <hr />

            <p className="card-text">
              <span>SCREEN 1</span>
              <h6 style={{ float: "right", textAlign: "center" }}>
                {selectedSeat?.length}
                <br /> Tickets
              </h6>
              <br />
              <span>NORMAL - </span>
              {selectedSeat?.map((seat) => (
                <span>{seat}, </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <section className="m-4" style={{ textAlign: "center" }}>
        <NavLink
          to="/"
          className="btn btn-outline-primary"
          onClick={handleSelectedSeat}
        >
          Book more tickets!
        </NavLink>
      </section>
    </>
  );
};

export default BookingConfirmed;
