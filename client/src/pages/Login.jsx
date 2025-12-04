import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <Header />
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />

          <button type="submit">Login</button>

          <div className="auth-link">
            <Link to="/signup">Don’t have an account? Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
