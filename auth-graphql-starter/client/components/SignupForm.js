import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import AuthForm from "./AuthForm";

const SingupForm = () => {
  return (
    <div>
      <h3>Sign Up</h3>
      <AuthForm />
    </div>
  );
};

export default SingupForm;
