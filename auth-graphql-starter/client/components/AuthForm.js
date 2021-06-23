import React, { useState } from "react";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="row">
      <form className="col s6">
        <div className="input-field">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
