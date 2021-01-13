import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import Container from "./Component/Container";
import AppNavBar from "./Component/AppNavBar";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

import { getTrending } from "./API_service/api_service";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = () => {
    getTrending()
      .then(({ results }) => {
        setMovieList(results);
      })
      .catch((e) => toast(e));
  };

  return (
    <Container>
      <AppNavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage movie_list={movieList} titleHeader="Trending today" />
        </Route>
        <Route path="/movies" exact>
          <MoviePage />
        </Route>
        <Route path="/movies/:movie_id">
          <MovieDetailsPage />
        </Route>
      </Switch>
      <ToastContainer />
    </Container>
  );
}

export default App;
