import "./home.scss";
import { Tabs } from "antd";
import MovieData from "../database/movieData";
import MovieCard from "./movieCard";

const Home = () => {
  const HindiMovieData = MovieData?.filter((movie) =>
    movie.language.includes("Hindi")
  );
  const EnglishMovieData = MovieData?.filter((movie) =>
    movie.language.includes("English")
  );
  return (
    <>
      <div className="container py-3">
        <h5 style={{ textAlign: "center" }}>Book Tickets</h5>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="All" key="1">
            <MovieCard MovieData={MovieData} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Hindi" key="2">
            <MovieCard MovieData={HindiMovieData} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="English" key="3">
            <MovieCard MovieData={EnglishMovieData} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
