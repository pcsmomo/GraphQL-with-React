import React from "react";
import { useQuery } from "@apollo/client";
import query from "../queries/CurrentUser";

const Header = () => {
  const { data, loading } = useQuery(query);

  const renderButtons = () => {
    if (loading) return <div />;

    if (data.user) {
      return <div>Logout</div>;
    } else {
      return <div>You're not signed in</div>;
    }
  };

  return <nav className="nav-wrapper purple lighten-3">{renderButtons()}</nav>;
};

export default Header;
