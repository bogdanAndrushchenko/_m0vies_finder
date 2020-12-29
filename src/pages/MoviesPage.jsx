import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import "./styles/MoviePage.scss";
import FormSearch from "../Component/FormSearch";
import HomePage from "./HomePage";

const MoviePage = ({ onFormSubmit }) => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movie_list, setMovieList] = useState([]);

  return (
    <>
      <FormSearch onFormSubmit={onFormSubmit} />
      <HomePage titleHeader={`Your result ${searchMovie}`} />
    </>
  );
};

MoviePage.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default MoviePage;
