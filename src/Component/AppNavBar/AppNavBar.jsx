import { useState } from "react";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

import s from "./AppNavBar.module.scss";

const AppNavBar = () => {
  return (
    <header className={s.Header}>
      <Navigation />
    </header>
  );
};

AppNavBar.propTypes = {};

export default AppNavBar;
