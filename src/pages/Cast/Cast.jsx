import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "./Cast.scss";

import defaultImage from "../../images/defaultImg.jpg";
import { getMovieDetailsCast } from "../../API_service/api_service";

const Cast = () => {
  const [castDetails, setCastDetails] = useState(null);
  const { movie_id } = useParams();

  useEffect(() => {
    getCastList();
  }, [movie_id]);

  const getCastList = () => {
    getMovieDetailsCast(movie_id, "credits")
      .then(({ cast }) => setCastDetails(cast))
      .catch((e) => toast(e));
  };

  return (
    <>
      {castDetails && (
        <ul className="CastGallery">
          {castDetails &&
            castDetails.map(({ id, profile_path, name, character }) => (
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
