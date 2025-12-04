import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    year: "",
    section: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful! Please login.");
    navigate("/");
  };

  return (
    <div className="auth-page">
      <Header />
      <div className="auth-container">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {["name", "email", "password", "department", "year", "section"].map(
            (field) => (
              <div key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            )
          )}

          <button type="submit">Sign Up</button>

          <div className="auth-link">
            <Link to="/">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
