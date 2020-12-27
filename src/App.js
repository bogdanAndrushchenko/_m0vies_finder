import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Container from "./Component/Container";
import AppNavBar from "./Component/AppNavBar";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviesPage";
// import NavBarA from "./Component/AppNavBar/NavBarA";

import getResource from "./API_service/api_service";

import "bootstrap/dist/css/bootstrap.min.css";
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
          <HomePage movie_list={movieList} />
        </Route>
        <Route path="/movie">
          <MoviePage />
        </Route>
      </Switch>
      <ToastContainer />
    </Container>
  );
}

export default App;
