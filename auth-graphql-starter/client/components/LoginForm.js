import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import AuthForm from "./AuthForm";

import LOGIN from "../mutations/Login";
import CURRENT_USER from "../queries/CurrentUser";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [login] = useMutation(LOGIN);

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

export default LoginForm;
