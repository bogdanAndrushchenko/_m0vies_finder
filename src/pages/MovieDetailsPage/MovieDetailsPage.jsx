import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, useParams } from "react-router-dom";

import MovieDetPagesLinks from "./Links/MovieDetPageLinks";
import Loader from "../../Component/Loader";

import { getMovieDetails } from "../../API_service/api_service";
import defaultImage from "../../images/defaultImg.jpg";

import s from "./MovieDetailsPage.module.scss";
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
        <div className={s.details}>
          <h1 className={s.title}>{movieDetails.original_title}</h1>
          <p className={s.title}>Release date: {movieDetails.release_date}</p>
          <p className={s.genres}>
            Genres:
            <br />
            <span className={s.genres__item}>
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
            className={s.details__img}
          />

          <p className={s.genres}>
            Production companies:
            <br />
            <span>
              {movieDetails.production_companies.map(
                ({ id, name, origin_country }) => (
                  <span key={id} className={s.genres__item}>
                    {`${name} ${origin_country && `(${origin_country})`}, `}
                  </span>
                )
              )}
            </span>
          </p>
          <p className={s.genres}>
            Overview:
            <br />
            <span className={s.overview}>{movieDetails.overview}</span>
          </p>

          <MovieDetPagesLinks />
          <Suspense fallback={<Loader />}>
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
