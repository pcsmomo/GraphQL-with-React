import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue lighten-3">
        <ul className="left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/songs/new">New Song</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
