import { Modal, notification } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

function Login() {
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // So sánh password và confirmPassword
    notification.success({
      message: "Đăng nhập thành công!",
      placement: "topLeft",
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
  return (
    <div className="login">
      <div className="login__form">
        <h3 className="login__form-title">Log in</h3>
        <form onSubmit={handleSubmit}>
          <div className="login__input-group">
            <div className="form-floating">
              <input
                type="email"
                className="login__form-group-input form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
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
              <label htmlFor="floatingPassword">Password</label>
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
