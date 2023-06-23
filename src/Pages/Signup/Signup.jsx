import React from "react";
import "./Signup.scss";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import {
  usernameChange,
  userLogin,
} from "../../redux/features-actions/signupSlice";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const { loginUsername } = useSelector((state) => state.signup);

  const handleUserChange = (event) => {
    const username = event.target.value;
    dispatch(usernameChange(username));
  };

  const handleLogin = () => {
    dispatch(userLogin());
  };

  return (
    <section className="signup-main container">
      <h2>Welcome to CodeLeap network!</h2>
      <div className="signup-form">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Form.Group className="mt-3">
            <Form.Label>Please enter your username</Form.Label>
            <Form.Control
              onChange={handleUserChange}
              className="signup-text-input"
              type="text"
              placeholder="John Doe"
            ></Form.Control>
          </Form.Group>
        </Form>
        {/* BUTTON CONTAINER */}

        <div className="text-end">
          {loginUsername.length < 1 ? (
            <button
              type="button"
              className="signup-form-disabled-button mt-2"
              disabled
            >
              enter
            </button>
          ) : (
            <Link to={"/main"}>
              <button
                onClick={() => handleLogin()}
                type="button"
                className="signup-form-button mt-2"
              >
                enter
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Signup;
