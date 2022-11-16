import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { SelectedMovieActions } from "../store/selectedMovie";

const MovieCard = ({ MovieData }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const Id = e.target.id;
    const selectedData = MovieData?.filter((movie) => movie.id === +Id);
    dispatch(SelectedMovieActions.setCurrentMovie(selectedData));
  };

  return (
    <>
      {MovieData.map((data) => (
        <div className="card my-3">
          <img
            src={data.image}
            className="card-img-top cardImage"
            alt="movie"
          />
          <div className="card-body">
            <div className="row">
              <div className="col-7">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">
                  {data.certifcation} . {data.language}
                </p>
                <div
                  className="card"
                  style={{
                    display: "flex",
                    width: "2.6rem",
                    textAlign: "center",
                    fontSize: ".8rem",
                  }}
                >
                  {data.Resolution}
                </div>
              </div>
              <div className="col-5 my-4">
                <NavLink
                  id={data.id}
                  onClick={handleClick}
                  to="/cinemahall"
                  className="btn btn-outline-primary"
                  style={{ float: "right" }}
                >
                  Book Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
