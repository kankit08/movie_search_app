import React, { useContext } from "react";
import { AppContext } from "../Context";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Movie = () => {
  const { movie, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }
  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movie.map((movieList) => {
          const { imdbID, Title, Poster } = movieList;
          const movieTitle = Title.substring(0, 15);
          return (
            <NavLink to={`movie/${imdbID}`} key={uuidv4()}>
              <div className="card">
                <div className="card-info">
                  <h2>
                    {movieTitle.length >= 15 ? `${movieTitle}...` : movieTitle}
                  </h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movie;
