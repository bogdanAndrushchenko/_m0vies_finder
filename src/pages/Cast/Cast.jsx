// import {Link, useRouteMatch} from "react-router-dom";
// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./Cast.scss";
import defaultImage from "../../images/defaultImg.jpg";

import { getMovieDetailsCast } from "../../API_service/api_service";
import { useParams } from "react-router-dom";

const Cast = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movie_id } = useParams();
  // const params = useRouteMatch();
  // console.log(params.path);
  useEffect(() => {
    getCastList();
  }, [movie_id]);

  const getCastList = () => {
    getMovieDetailsCast(movie_id, "credits").then(({ cast }) =>
      setMovieDetails(cast)
    );
  };
  console.log(movieDetails);
  return (
    <>
      {movieDetails && (
        <ul className="CastGallery">
          {movieDetails &&
            movieDetails.map(({ id, profile_path, name, character }) => (
              <li className="CastGalleryItem" key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImage
                  }
                  alt={name}
                  className="CastGalleryItem-image"
                />
                <p className="NameCast">
                  {name ? name : "Якийсь чувак"}
                  <br />
                  <span className="CharacterCast">
                    as a {character ? character : "Noname"}
                  </span>
                </p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
