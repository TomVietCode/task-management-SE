import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

function Register() {
  const navigate = useNavigate();//thay đổi URL hoặc điều hướng

  // confirmPassword

  // useState, nó trả về một mảng gồm hai phần tử:
  // Giá trị hiện tại của trạng thái: Được sử dụng để đọc giá trị của trạng thái.
  // Hàm để cập nhật giá trị trạng thái: Được gọi để thay đổi giá trị của trạng thái.
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatch, setIsMatch] = useState(null);

  //lấy giá trị password ng dùng nhập vào
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setIsMatch(confirmPasswordValue === password);//so sánh cập nhập value cho isMatch
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // So sánh password và confirmPassword
    if (isMatch) {
      // Xử lý đăng ký thành công
      notification.success({
        message: "Đăng ký thành công!",
        placement: "topLeft",
        duration: 2,
        onClose: () => navigate("/Login"),
      });
    } 
  };

  return (
    <div className="register">
      <div className="register__form">
        <h3 className="register__form-title">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="register__input-group">
            <div className="form-floating">
              <input
                type="email"
                className="register__form-group-input form-control"
                id="floatingEmail"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
          </div>
          <div className="register__input-group">
            <div className="form-floating">
              <input
                type="password"
                className="register__form-group-input form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
          <div className="register__input-group">
            <div className="form-floating">
              <input
                type="password"
                className={`register__form-group-input form-control ${!isMatch && confirmPassword ? 'border-danger' : ''}`}
                id="floatingConfirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
              {!isMatch && confirmPassword && <small className="text-danger">Passwords do not match</small>}
            </div>
          </div>
          <button type="submit" className="btn btn-primary register__submit-button">Sign Up</button>
          <p className="register__login">
            Already have an account? <a href="/Login" className="register__login-link">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
