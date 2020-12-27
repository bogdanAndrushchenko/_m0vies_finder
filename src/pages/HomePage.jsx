import PropTypes from "prop-types";

import "./styles/HomePage.scss";
import { NavLink } from "react-router-dom";

const HomePage = ({ movie_list }) => {
  return (
    <ul className="MovieGallery">
      {movie_list &&
        movie_list.map(({ id, poster_path, original_title, tags }) => (
          <li className="MovieGalleryItem" key={id}>
            <NavLink to="/movies/movie">
              <div className="Title_cart">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={original_title}
                  width="300px"
                />
              </div>
              <h3>{original_title}</h3>
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

HomePage.propTypes = {
  movie_list: PropTypes.array,
};

export default HomePage;
