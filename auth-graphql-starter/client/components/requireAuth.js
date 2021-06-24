import React, { useEffect } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { useHistory } from "react-router-dom";

import CURRENT_USER from "../queries/CurrentUser";

const RequireAuth = (props) => {
  console.log(props);
  const history = useHistory();
  useEffect(() => {
    if (!props.isloading && !props.data.user) history.push("/login");
  }, []);
};

export default graphql(CURRENT_USER)(RequireAuth);
