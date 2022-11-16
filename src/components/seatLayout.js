import { useDispatch, useSelector } from "react-redux";
import { selectedSeatActions } from "../store/selectedSeat";
import "./seatLayout.scss";
// import { CgUnavailable } from "react-icons/cg";
import { BiArrowBack, BiRupee } from "react-icons/bi";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ticketPriceActions } from "../store/ticketPrice";

const SeatLayout = () => {
  const dispatch = useDispatch();
  const selectedCinemahall = useSelector(
    (state) => state.cinemaHall.currentCinemaHall
  );
  const selectedMovie = useSelector(
    (state) => state.selectedMovie.currentMovie
  );
  const rowCount = useSelector((state) => state.seat.rowCount);
  let selectedSeat = useSelector((state) => state.selected.selectedSeat);
  const confirmedSeat = useSelector((state) => state.confirmed.confirmedSeat);

  useEffect(() => {
    document.querySelectorAll(".btn").forEach((btn) => {
      if (confirmedSeat.includes(btn.innerHTML)) {
        btn.classList.add("bookedSeat");
      }
    });

    const price = document.getElementById("price").textContent.slice(7);
    dispatch(ticketPriceActions.updateTicketPrice(price));
  }, [confirmedSeat]);

  const handleChecked = (e) => {
    e.preventDefault();
    if (e.target.className.includes("btn")) {
      let value = e.target.value;
      e.target.classList.toggle("btn-card");

      dispatch(selectedSeatActions.addSelectedSeat(value));
    }
  };

  return (
    <>
      <div className="container">
        <div className="nav p-4">
          <NavLink to="/cinemaHall">
            <BiArrowBack style={{ fontSize: "1.6rem" }} />
          </NavLink>
          <div>
            {selectedMovie?.map((movie) => (
              <>
                <h5 className="mx-3">{movie.name}</h5>
              </>
            ))}
            <p>
              {selectedCinemahall?.cinemaHall}
              <br />
              <span className="text-secondary">
                {selectedCinemahall?.showDate.slice(0, 3)}
              </span>
              <br />
              <span>{selectedCinemahall?.bookingTime}</span>
            </p>
          </div>
        </div>
        <div
          className="card py-2 mb-4"
          style={{
            width: "24em",
            display: "flex",
            margin: "auto",
          }}
        >
          <p id="price" name="230" style={{ textAlign: "center" }}>
            Price: <BiRupee />
            250
          </p>
          {rowCount?.map((val, id) => {
            return (
              <>
                <div className="seatCard" key={id} onClick={handleChecked}>
                  <div className="seatCardLeft">
                    <div className="p-1">
                      <button
                        className="btn btn-outline-primary"
                        value={val + String.fromCharCode(65)}
                      >
                        {val + String.fromCharCode(65)}
                      </button>
                    </div>

                    <div className="p-1">
                      <button
                        className="btn btn-outline-primary"
                        value={val + String.fromCharCode(66)}
                      >
                        {val + String.fromCharCode(66)}
                      </button>
                    </div>

                    <div className="p-1">
                      <button
                        className="btn btn-outline-primary"
                        value={val + String.fromCharCode(67)}
                      >
                        {val + String.fromCharCode(67)}
                      </button>
                    </div>
                  </div>

                  <div className="seatCardRight px-3">
                    <div className="p-1">
                      <button
                        className="btn btn-outline-primary"
                        value={val + String.fromCharCode(68)}
                      >
                        {val + String.fromCharCode(68)}
                      </button>
                    </div>

                    <div className="p-1">
                      <button
                        className="btn btn-outline-primary"
                        value={val + String.fromCharCode(69)}
                      >
                        {val + String.fromCharCode(69)}
                      </button>
                    </div>

                    <div className="p-1">
                      <button
                        className="btn btn-outline-primary"
                        value={val + String.fromCharCode(70)}
                      >
                        {val + String.fromCharCode(70)}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="screen">SCREEN THIS WAY</div>
        </div>

        {selectedSeat.length > 0 ? (
          <>
            <div className="py-4" style={{ textAlign: "center" }}>
              ...
            </div>
            <div className=" px-2 mt-4 fixed-bottom">
              <div className="row pb-3" style={{ textAlign: "center" }}>
                <div className="col-4">
                  <button
                    className="btn btn-outline-primary mx-1"
                    style={{ height: "1.5rem", pointerEvents: "none" }}
                  ></button>
                  Available
                </div>
                <div className="col-4">
                  <button
                    className="btn btn-secondary mx-1"
                    style={{ height: "1.5rem", pointerEvents: "none" }}
                  ></button>
                  Booked
                </div>
              </div>
              <NavLink to="/seatconfirmation" className="btn btn-primary w-100">
                Book {selectedSeat.length} Tickets
              </NavLink>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SeatLayout;
