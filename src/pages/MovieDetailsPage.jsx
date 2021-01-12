import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import defaultImage from "../images/defaultImg.jpg";
import { getMovieDetails } from "../API_service/api_service";

import "./styles/MovieDetailsPage.scss";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movie_id } = useParams();

  useEffect(() => {
    getDetails();
  }, [movie_id]);

  const getDetails = () => {
    getMovieDetails(movie_id).then((data) => setMovieDetails(data));
  };

  return (
    <>
      {movieDetails && (
        <div className="details">
          <h1 className="title">{movieDetails.original_title}</h1>
          <p className="release">Release date: {movieDetails.release_date}</p>
          <p className="genres">
            Genres:
            <p className="genres__item">
              {movieDetails.genres.map(({ id, name }) => (
                <span key={id}>{`${name}, `}</span>
              ))}
            </p>
          </p>
          <img
            src={
              movieDetails.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`
                : defaultImage
            }
            alt="movie"
            className="details__img"
          />

          <p className="genres">
            Production companies:
            <ul>
              {movieDetails.production_companies.map(
                ({ id, name, origin_country }) => (
                  <li key={id} className="genres__item">
                    <p>{`${name} ${
                      origin_country && `(${origin_country})`
                    }`}</p>
                  </li>
                )
              )}
            </ul>
          </p>
          <p className="genres">Overview:</p>
          <p className="overview">{movieDetails.overview}</p>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
//
