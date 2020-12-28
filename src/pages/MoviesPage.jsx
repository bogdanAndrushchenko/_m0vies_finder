import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import "./styles/MoviePage.scss";

const MoviePage = ({ onFormSubmit }) => {
  const [searchMovie, setSearchMovie] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.currentTarget;
    setSearchMovie(value.toLowerCase());
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (searchMovie.trim() === "") {
      toast.error("Please enter request", { autoClose: 2000 });
      return;
    }
    onFormSubmit(searchMovie);
    resetForm();
  };

  const resetForm = () => {
    setSearchMovie("");
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmitForm}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="searchMovie"
        value={searchMovie}
        onChange={handleInputChange}
      />
    </form>
  );
};

MoviePage.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default MoviePage;
