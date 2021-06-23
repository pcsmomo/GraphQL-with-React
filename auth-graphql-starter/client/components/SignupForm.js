import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import AuthForm from "./AuthForm";

import SIGNUP from "../mutations/Signup";

const SingupForm = () => {
  const [signup] = useMutation(SIGNUP);

  const submit = ({ email, password }) => {
    signup({
      variables: { email, password }
    });
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <AuthForm errors={[]} submit={submit} />
    </div>
  );
};

export default SingupForm;
