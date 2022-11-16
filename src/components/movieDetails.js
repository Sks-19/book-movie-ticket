import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import CinemaHall from "./cinemaHall";
import { BiArrowBack } from "react-icons/bi";
import "./movieDetails.scss";
import AboutMovie from "./aboutMovie";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const selectedMovie = useSelector(
    (state) => state.selectedMovie.currentMovie
  );

  return (
    <>
      <div className="container">
        <div className="p-2">
          {selectedMovie?.map((movie) => (
            <>
              <div className="d-flex py-2">
                <NavLink to="/" className="btn" style={{ borderStyle: "none" }}>
                  <BiArrowBack />
                </NavLink>
                <h6 className="my-2">{movie.name}</h6>
              </div>

              <iframe
                width="100%"
                height="250"
                src={movie.link}
                title="Tiger Zinda Hai Trailer"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <span>
                <AiFillStar className="text-danger" /> {movie.rating.rate}/10
                &nbsp; {movie.rating.count}K ratings
              </span>
              <br />
              <div>
                <span className="showBox">{movie.Resolution}</span>
                <span className="showBox">{movie.language}</span>
              </div>
              <span>
                {movie.certifcation} &nbsp;.&nbsp; {movie.runningHours}{" "}
                &nbsp;.&nbsp; {movie.genres} &nbsp;.&nbsp; {movie.releaseDate}
              </span>
            </>
          ))}
        </div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Showlisting" key="1">
            <CinemaHall />
          </Tabs.TabPane>
          <Tabs.TabPane tab="About Movie" key="2">
            <AboutMovie selectedMovie={selectedMovie} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default MovieDetails;
