import React from "react";
import AuthForm from "./AuthForm";
import { useMutation } from "@apollo/client";
import LOGIN from "../mutations/Login";

const LoginForm = () => {
  const [login] = useMutation(LOGIN);

  const submit = ({ email, password }) => {
    login({ variables: { email, password } });
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <AuthForm submit={submit} />
    </div>
  );
};

export default LoginForm;
