import { Switch, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { toast, ToastContainer } from "react-toastify";

import Container from "./Component/Container";
import AppNavBar from "./Component/AppNavBar";
import Loader from "./Component/Loader";

import { getTrending } from "./API_service/api_service";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() =>
  import("./pages/HomePage" /*webpackChunkName:"home-page"*/)
);
const MoviePage = lazy(() =>
  import("./pages/MoviePage" /*webpackChunkName:"movie-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" /*webpackChunkName:"movie-details-page"*/)
);

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
      <Suspense fallback={<Loader />}>
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
      </Suspense>
      <ToastContainer />
    </Container>
  );
}

export default App;
