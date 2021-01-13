// import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";

import "./HomePage.scss";
import defaultImage from "../../images/defaultImg.jpg";

const HomePage = ({ movie_list, titleHeader }) => {
  // const params = useRouteMatch();
  // console.log(params.path);
  return (
    <>
      {movie_list && (
        <>
          <h2 className="TitleHeader">{titleHeader}</h2>
          <ul className="MovieGallery">
            {movie_list &&
              movie_list.map(({ id, title, backdrop_path }) => (
                <li className="MovieGalleryItem" key={id}>
                  <Link to={`/movies/${id}`}>
                    <img
                      src={
                        backdrop_path
                          ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                          : defaultImage
                      }
                      alt={title}
                      className="MovieGalleryItem-image"
                    />
                    <h3 className="TitleFilm">
                      {title ? title : "The Best Film"}
                    </h3>
                  </Link>
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
