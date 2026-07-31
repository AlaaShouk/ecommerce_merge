import React from "react";
import Swal from "sweetalert2";

import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import {callApiPost,} from "../../services/http"
import { useSpinner } from "./SpinnerContext";


const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [formError, setFormError] = useState(null);
  const[lockButton ,setLockButton] = useState(false);
  const { show, hide } = useSpinner();
  
   async function handleSubmit(e) {
  e.preventDefault();
  // setFormError(null);

      if (!email || !password) {
        setFormError('الرجاء إدخال البريد الإلكتروني وكلمة المرور');
        return;
      }
    //  setLockButton(true)
      show();
      console.log("show");
      const result = await callApiPost("login",{ email, password } ,(data ) => data.message  || "Login failed")
      hide();      
      // setLockButton(false)
      login(result.data.user);
      navigate("/");

}



  return (<div className="container-fluid login-page">
      <div className="row min-vh-100 align-items-center">

        {/* Left Side */}
        <div className="col-lg-6 d-none d-lg-block p-0">
          <img
            src="assets/Side_Image.png"
            alt="Login" 
          />
        </div>

        {/* Right Side */}
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="login-box">

            <h2 className="fw-bold mb-2">Log in to Exclusive</h2>

            <p className="text-muted small mb-5">
              Enter your details below
            </p>

            <form  onSubmit={handleSubmit}>

              <div className="mb-4">
                <input
                  type="email"
                  className="form-control border-0 border-bottom rounded-0 shadow-none"
                  placeholder="Email or Phone Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email" minLength={8} 
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"   minLength={6}
                  className="form-control border-0 border-bottom rounded-0 shadow-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">

                <button
                  className="btn btn-danger px-5 py-2"
                  type="submit"
                  // onClick={setLockButton}
                  disabled={lockButton}
                >
                  Log In
                </button>

                <Link
                    to="/forgot-password"
                    className="text-danger text-decoration-none"
                  >
                    Forget Password?
                </Link>
              </div>

            </form>
            {formError && (
            <p className="text-danger mt-2">{formError}</p>
          )}

          </div>
        </div>

      </div>
    </div>)
};

export default Login;
