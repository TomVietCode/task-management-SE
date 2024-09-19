import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { validateEmail } from '../Helper'

function Register() {
  

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


  
  const navigate = useNavigate();//thay đổi URL hoặc điều hướng
  const handleSubmit = (e) => {
    e.preventDefault();
    // So sánh password và confirmPassword
    if (isMatch) {
      // Xử lý đăng ký thành công
      notification.success({
        message: "SignUp Success!",
        placement: "topRight",
        duration: 2,
        onClose: () => navigate("/Login"),
      });
    } 
  };
  //check email
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    validateEmail(emailInput, setEmail, setError);
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
                className={`register__form-group-input form-control ${error ? 'border-danger' : ''}`}
                id="floatingEmail"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="floatingEmail">Email address</label>
              {error && <small className="text-danger">The correct format email: name@example.com</small>}
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
