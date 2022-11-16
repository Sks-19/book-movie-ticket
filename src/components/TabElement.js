import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { SelectedCinemaHallActions } from "../store/selectedCinemahall";

const TabElement = ({ showDate, CinemaHallData }) => {
  const dispatch = useDispatch();
  const handleSelectedCinemaHall = (e) => {
    const obj = {
      cinemaHall: e.target.id,
      bookingTime: e.target.innerHTML,
      showDate: e.target.name,
    };
    dispatch(SelectedCinemaHallActions.addSelectedCinemaHall(obj));
  };

  return (
    <>
      <div className="container">
        {CinemaHallData?.map((cinema) => (
          <div className="m-2 bg-white">
            <p>{cinema.name}</p>
            <div className="row">
              {cinema.showTime.map((time) => (
                <NavLink
                  to="/seatlayout"
                  id={cinema.name}
                  name={showDate}
                  onClick={handleSelectedCinemaHall}
                  className="btn btn-outline-secondary m-2 p-2 text-success"
                  style={{
                    width: "4rem",
                    border: ".5px solid gray",
                    borderRadius: "10px",
                    fontSize: ".6rem",
                    textAlign: "center",
                    paddingTop: "1%",
                  }}
                >
                  {time}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabElement;
