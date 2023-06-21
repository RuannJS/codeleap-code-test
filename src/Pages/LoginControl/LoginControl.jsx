import React from "react";
import "./LoginControl.scss";
import { Link } from "react-router-dom";

const LoginControl = () => {
  return (
    <section className="login-control-container container">
      <div className="control-text">
        <h1>Access denied</h1>
        <h4>You do not have permission to view this page.</h4>
        <Link to={"/"}>
          <button className="login-control-btn mt-3">Please Login</button>
        </Link>
      </div>
    </section>
  );
};

export default LoginControl;
