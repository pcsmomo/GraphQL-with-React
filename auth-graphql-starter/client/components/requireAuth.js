import React, { useEffect } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { useHistory } from "react-router-dom";

import CURRENT_USER from "../queries/CurrentUser";

export default (WrappedComponent) => {
  const RequireAuth = (props) => {
    console.log(props);
    const history = useHistory();

    // ComponentWillUpdate
    useEffect(() => {
      const {
        data: { loading, user }
      } = props;
      if (!loading && !user) {
        console.log("did it work?");
        history.push("/login");
      }
    });

    return <WrappedComponent {...props} />;
  };

  return graphql(CURRENT_USER)(RequireAuth);
};
