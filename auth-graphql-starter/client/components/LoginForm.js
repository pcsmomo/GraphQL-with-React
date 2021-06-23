import React from "react";
import AuthForm from "./AuthForm";
import { useMutation } from "@apollo/client";
import LOGIN from "../mutations/Login";

const LoginForm = () => {
  const [login] = useMutation(LOGIN);

  return (
    <div className="container">
      <h3>Login</h3>
      <AuthForm />
    </div>
  );
};

export default LoginForm;
