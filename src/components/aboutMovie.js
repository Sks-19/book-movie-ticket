const AboutMovie = ({ selectedMovie }) => {
  return (
    <>
      <div className="container">
        {selectedMovie?.map((movie) => (
          <>
            <div>
              <h6>Details</h6>
              <ul>
                <li>{movie.language}</li>
                <li>{movie.genres}</li>
              </ul>
              <h6>Synopsis</h6>
              <p>{movie.about}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default AboutMovie;
