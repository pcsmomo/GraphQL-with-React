import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

import AuthForm from "./AuthForm";

import LOGIN from "../mutations/Login";
import CURRENT_USER from "../queries/CurrentUser";

const LoginForm = ({ data: { user } }) => {
  const [errors, setErrors] = useState([]);
  const [login] = useMutation(LOGIN);

  // This is compatible with componentWillUpdate()
  const isInitialMount = useRef(true);
  const history = useHistory();
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log("hook works!");
      if (user) {
        history.push("/dashboard");
      }
    }
  }, [user]);

  const submit = ({ email, password }) => {
    login({
      variables: { email, password },
      refetchQueries: [{ query: CURRENT_USER }]
    }).catch((res) => {
      setErrors(
        res.graphQLErrors.map(({ message }) =>
          message.substring(message.indexOf('"') + 1, message.length - 1)
        )
      );
    });
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <AuthForm errors={errors} submit={submit} />
    </div>
  );
};

export default graphql(CURRENT_USER)(LoginForm);
