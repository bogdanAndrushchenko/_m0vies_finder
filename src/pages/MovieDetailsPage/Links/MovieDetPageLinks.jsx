import { NavLink, useRouteMatch } from "react-router-dom";

import "./MovieDetPageLinks.scss";

const MovieDetPagesLinks = () => {
  const { url } = useRouteMatch();
  return (
    <nav>
      <NavLink
        to={`${url}/cast`}
        exact
        className="Link"
        activeClassName="ActiveLink"
      >
        Cast
      </NavLink>
      <NavLink
        to={`${url}/reviews`}
        className="Link"
        activeClassName="ActiveLink"
      >
        Reviews
      </NavLink>
    </nav>
  );
};

export default MovieDetPagesLinks;
