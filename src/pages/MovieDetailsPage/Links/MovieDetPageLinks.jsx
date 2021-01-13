import "./MovieDetPageLinks.scss";

import { NavLink, useRouteMatch } from "react-router-dom";

const MovieDetPagesLinks = () => {
  const { url } = useRouteMatch();
  console.log(url);
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
