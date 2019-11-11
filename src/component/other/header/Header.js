import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <p>Star Wars</p>
        </Link>
      </div>
      <div>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
