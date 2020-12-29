import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./styles/HomePage.scss";

const HomePage = ({ movie_list, titleHeader }) => {
  return (
    <>
      {movie_list && (
        <>
          <h2 className="TitleHeader">{titleHeader}</h2>
          <ul className="MovieGallery">
            {movie_list &&
              movie_list.map(({ id, poster_path, title, backdrop_path }) => (
                <li className="MovieGalleryItem" key={id}>
                  <NavLink to="/movies/movie">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                      alt={title}
                      className="MovieGalleryItem-image"
                    />
                    <h3 className="TitleFilm">
                      {title ? title : "The Best Film"}
                    </h3>
                  </NavLink>
                </li>
              ))}
          </ul>
        </>
      )}
    </>
  );
};

HomePage.propTypes = {
  movie_list: PropTypes.arrayOf(PropTypes.object),
};

export default HomePage;
