import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, useParams } from "react-router-dom";

import MovieDetPagesLinks from "./Links/MovieDetPageLinks";

import { getMovieDetails } from "../../API_service/api_service";
import defaultImage from "../../images/defaultImg.jpg";

import "./MovieDetailsPage.scss";
import { toast } from "react-toastify";

const Cast = lazy(() => import("../Cast" /*webpackChunkName:"cast"*/));
const Reviews = lazy(() => import("../Reviews" /*webpackChunkName:"reviews"*/));

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movie_id } = useParams();

  useEffect(() => {
    getDetails();
  }, [movie_id]);

  const getDetails = () => {
    getMovieDetails(movie_id)
      .then((data) => setMovieDetails(data))
      .catch((e) => toast(e));
  };

  return (
    <>
      {movieDetails && (
        <div className="details">
          <h1 className="title">{movieDetails.original_title}</h1>
          <p className="release">Release date: {movieDetails.release_date}</p>
          <p className="genres">
            Genres:
            <br />
            <span className="genres__item">
              {movieDetails.genres.map(({ id, name }) => (
                <span key={id}>{`${name}, `}</span>
              ))}
            </span>
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
            <br />
            <span>
              {movieDetails.production_companies.map(
                ({ id, name, origin_country }) => (
                  <span key={id} className="genres__item">
                    {`${name} ${origin_country && `(${origin_country})`}, `}
                  </span>
                )
              )}
            </span>
          </p>
          <p className="genres">
            Overview:
            <br />
            <span className="overview">{movieDetails.overview}</span>
          </p>

          <MovieDetPagesLinks />
          <Suspense fallback={"loading"}>
            <Route path="/movies/:movie_id/cast">
              <Cast />
            </Route>
            <Route path="/movies/:movie_id/reviews">
              <Reviews />
            </Route>
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
