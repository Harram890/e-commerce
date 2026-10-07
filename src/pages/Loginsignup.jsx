
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginsignup.scss";

function Loginsignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const correctEmail = "harramsiddiqui152@gmail.com";
    const correctPassword = "harram2010";

    if (
      email === correctEmail &&
      password === correctPassword
    ) {
      // Login hone ke baad permission save hogi
      sessionStorage.setItem("adminLogin", "true");

      // Ab Admin page open hoga
      navigate("/admin-panel");
    } else {
      alert("According to my information your email or password is wrong , kindly enter the correct gmail or passwrd!");
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>Login</h1>
        <p>Enter your Email and Password</p>

        <form onSubmit={handleLogin}>

          <div className="input-box">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Loginsignup;

