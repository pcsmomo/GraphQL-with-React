import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import query from "../queries/CurrentUser";

const Header = () => {
  const { data, loading } = useQuery(query);

  const renderButtons = () => {
    if (loading) return <div />;

    if (data.user) {
      return <div>Logout</div>;
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };

  return (
    <nav className="nav-wrapper purple lighten-3">
      <Link to="/" className="brand-logo left">
        Home
      </Link>
      <ul className="right">{renderButtons()}</ul>
    </nav>
  );
};

export default Header;
