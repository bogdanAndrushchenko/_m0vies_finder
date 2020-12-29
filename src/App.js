import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Container from "./Component/Container";
import AppNavBar from "./Component/AppNavBar";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviesPage";

import getResource from "./API_service/api_service";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = () => {
    getResource().then(({ results }) => {
      setMovieList(results);
      console.log(results);
    });
  };
  return (
    <Container>
      <AppNavBar />
      {/*<NavBarA onFormSubmit={foo} />*/}
      <Switch>
        <Route path="/" exact>
          <HomePage movie_list={movieList} titleHeader="Trending today" />
        </Route>
        <Route path="/movies">
          <MoviePage />
        </Route>
      </Switch>
      <ToastContainer />
    </Container>
  );
}

export default App;
