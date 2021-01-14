import { NavLink, useRouteMatch } from "react-router-dom";

import s from "./MovieDetPageLinks.module.scss";

const MovieDetPagesLinks = () => {
  const { url } = useRouteMatch();
  return (
    <nav>
      <NavLink
        to={`${url}/cast`}
        exact
        className={s.Link}
        activeClassName={s.ActiveLink}
      >
        Cast
      </NavLink>
      <NavLink
        to={`${url}/reviews`}
        className={s.Link}
        activeClassName={s.ActiveLink}
      >
        Reviews
      </NavLink>
    </nav>
  );
};

export default MovieDetPagesLinks;
