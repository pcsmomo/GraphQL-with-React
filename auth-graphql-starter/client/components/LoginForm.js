import React from "react";
import { useMutation } from "@apollo/client";

import AuthForm from "./AuthForm";

import LOGIN from "../mutations/Login";
import CURRENT_USER from "../queries/CurrentUser";

const LoginForm = () => {
  const [login] = useMutation(LOGIN);

  const submit = ({ email, password }) => {
    login({
      variables: { email, password },
      refetchQueries: [{ query: CURRENT_USER }]
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => error.message);
    });
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <AuthForm submit={submit} />
    </div>
  );
};

export default LoginForm;
