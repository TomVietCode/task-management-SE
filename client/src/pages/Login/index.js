import { Modal, notification } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { validateEmail } from "../Helper";
function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // So sánh password và confirmPassword
    notification.success({
      message: "Welcome!",
      placement: "topRight",
      duration: 2,
      onClose: () => navigate("/Home"),
    });
  };
  //forgot password
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const cancelCloseModal = () => setIsModalOpen(false);
  const OkCloseModal = () => {
    notification.success({
      message: "Reset password complicated!",
      description: "Please check your inbox to get new password.",
      placement: "topLeft",
      duration: 3,
    });
    setIsModalOpen(false);
  };

  //check email
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    validateEmail(emailInput, setEmail, setError);
  };

  return (
    <div className="login">
      <div className="login__form">
        <h3 className="login__form-title">Log in</h3>
        <form onSubmit={handleSubmit}>
          <div className="login__input-group">
            <div className="form-floating">
              <input
                type="email"
                className={`login__form-group-input form-control ${
                  error ? "border-danger" : ""
                }`}
                id="floatingEmail"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="floatingEmail">Email address</label>
              {error && (
                <small className="text-danger">
                  The correct format email: name@example.com
                </small>
              )}
            </div>
          </div>
          <div className="login__input-group">
            <div className="form-floating">
              <input
                type="password"
                className="login__form-group-input form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label id="labelPassword" htmlFor="floatingPassword">
                <p>Password</p>
              </label>
            </div>
            <a
              href="#"
              className="login__forgot-password"
              onClick={() => {
                openModal();
              }}
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="btn btn-primary login__submit-button"
          >
            Log In
          </button>
          <p className="login__signup">
            Don't have an account?{" "}
            <a href="/SignUp" className="login__signup-link">
              Sign up
            </a>
          </p>
        </form>
      </div>

      <Modal
        title="Forgot Password"
        open={isModalOpen}
        onOk={OkCloseModal}
        onCancel={cancelCloseModal}
      >
        <p>To get new password, please enter your email address.</p>
        <input
          type="email"
          className="login__form-group-input form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
      </Modal>
    </div>
  );
}

export default Login;
