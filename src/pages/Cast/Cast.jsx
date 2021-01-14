import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import s from "./Cast.module.scss";

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
        <ul className={s.CastGallery}>
          {castDetails &&
            castDetails.map(({ id, profile_path, name, character }) => (
              <li className={s.CastGalleryItem} key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImage
                  }
                  alt={name}
                  className={s.CastGalleryItemImage}
                />
                <p className={s.NameCast}>
                  {name ? name : "Якийсь чувак"}
                  <br />
                  <span className={s.CharacterCast}>
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
