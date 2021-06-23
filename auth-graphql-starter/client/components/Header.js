import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import CURRENT_USER from "../queries/CurrentUser";
import LOGOUT from "../mutations/Logout";

const Header = () => {
  const { data, loading } = useQuery(CURRENT_USER);
  // 1st way: refetchQuery
  const [logout] = useMutation(LOGOUT, {
    refetchQueries: [{ query: CURRENT_USER }]
  });

  // 2nd way: Hard write, but once more requesting
  // const [logout] = useMutation(LOGOUT, {
  //   update(cache) {
  //     cache.modify({
  //       fields: {
  //         user() {
  //           return null;
  //         }
  //       }
  //     });
  //   }
  // });

  const onLogoutClick = () => {
    logout();
  };

  const renderButtons = () => {
    if (loading) return <div />;

    if (data.user) {
      return (
        <li>
          <a onClick={onLogoutClick}>Logout</a>
        </li>
      );
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
