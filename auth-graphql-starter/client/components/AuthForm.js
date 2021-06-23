import React, { useState } from "react";

const AuthForm = ({ errors, submit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    submit({ email, password });
  };

  return (
    <div className="row">
      <form onSubmit={onSubmit} className="col s6">
        <div className="input-field">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="errors">
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
