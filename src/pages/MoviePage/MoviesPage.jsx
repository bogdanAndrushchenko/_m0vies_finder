import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import FormSearch from "../../Component/FormSearch";
import HomePage from "../HomePage";

import { getSearchMovie } from "../../API_service/api_service";

const MoviePage = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (searchMovie !== "") {
      getMovieList();
    }
  }, [searchMovie]);

  const getMovieList = () => {
    getSearchMovie(searchMovie)
      .then(({ results }) => {
        setMovieList(results);
      })
      .catch((e) => toast(e));
  };

  const onFormSubmit = (movie) => {
    setSearchMovie(movie);
  };

  return (
    <>
      <FormSearch onFormSubmit={onFormSubmit} />
      {searchMovie && (
        <HomePage
          movie_list={movieList}
          titleHeader={`Your result ${searchMovie}`}
        />
      )}
    </>
  );
};

export default MoviePage;
