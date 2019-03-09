import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <>
    <div className="pageNotFound">
      <Link to="/">
        <p>Come back home</p>
      </Link>
      <p>404</p>
    </div>
  </>
);

export default PageNotFound;
