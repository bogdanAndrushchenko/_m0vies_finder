import Navigation from "./Navigation";

import s from "./AppNavBar.module.scss";

const AppNavBar = () => {
  return (
    <header className={s.Header}>
      <Navigation />
    </header>
  );
};

export default AppNavBar;
