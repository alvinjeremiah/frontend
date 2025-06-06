import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './LoginSignup.css'

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        email,
        password
      });

      if (res.data === "exist") {
        alert("User already exists");
      } else if (res.data === "notexist") {
        localStorage.setItem("user", JSON.stringify({ email }));
        navigate("/", { state: { id: email } });

      } else {
        alert("Unexpected response: " + res.data);
      }
    } catch (e) {
      console.error("Signup error:", e.response?.data || e.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login">
      <h1>Signup</h1>
      <form onSubmit={submit}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/login">Existing Customer</Link>
    </div>
  );
}

export default Signup;
