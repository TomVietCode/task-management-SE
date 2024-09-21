import { notification } from "antd"
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.scss"
import { validateEmail } from "../../helpers"
import { register } from "../../services/UserService"

function Register() {
  const [data, setData] = useState({})
  const [firstPassword, setFirstPassword] = useState("")
  const [isPasswordMatch, setIsPasswordMatch] = useState(true)

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    if(name === "email"){
      validateEmail(value, setEmail, setError)
    }
    if(name === "firstPassword"){
      setFirstPassword(value)
    }
    
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handlePassword = (e) => {
    if(firstPassword !== e.target.value){
      setIsPasswordMatch(false)
    }else{
      setIsPasswordMatch(true)
      setData({
        ...data,
        "password": e.target.value,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await register(data)
    if(result.code === 200){
      notification.success({
        message: "SignUp Success!",
        placement: "topRight",
        duration: 2,
      })
      document.cookie = "tokenUser=xinchao123"
    }
  }

  
  //check email
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")


  return (
    <div className="register">
      <div className="register__form">
        <h3 className="register__form-title">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="register__input-group">
            <div className="form-floating">
              <input
                name="email"
                type="email"
                className={`register__form-group-input form-control ${
                  error ? "border-danger" : ""
                }`}
                id="floatingEmail"
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <label htmlFor="floatingEmail">Email address</label>
              {error && (
                <small className="text-danger">
                  The correct format email: name@example.com
                </small>
              )}
            </div>
          </div>
          <div className="register__input-group">
            <div className="form-floating">
              <input
                type="password"
                name="firstPassword"
                className="register__form-group-input form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
          <div className="register__input-group">
            <div className="form-floating">
              <input
                type="password"
                name="password"
                className={`register__form-group-input form-control
                  ${!isPasswordMatch && 'border-danger'}
                `}
                id="floatingConfirmPassword"
                placeholder="Confirm Password"
                onChange={handlePassword}
              />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
              {!isPasswordMatch && <small className="text-danger">Passwords do not match</small>}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary register__submit-button"
          >
            Sign Up
          </button>
          <p className="register__login">
            Already have an account?{" "}
            <a href="/Login" className="register__login-link">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
