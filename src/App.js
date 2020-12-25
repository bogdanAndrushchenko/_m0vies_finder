import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Container from "./Component/Container";
import HomePage from "./pages/HomePage";
import NavBarA from "./Component/AppNavBar/NavBarA";
import AppNavBar from "./Component/AppNavBar";

import getResource from "./API_service/api_service";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const foo = (d) => {
    console.log(d);
  };
  return (
    <Container>
      {/*<AppNavBar/>*/}
      <NavBarA onFormSubmit={foo} />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <ToastContainer />
    </Container>
  );
}

export default App;
