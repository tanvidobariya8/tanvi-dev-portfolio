import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";

  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      console.log("ok succees");
      navigate('/userlist')
    } else {
      console.error("not match email or password");
    }
  };

  return (
    <div>
      Email
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      Password
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
      <h1>Loginpage</h1>
    </div>
  );
};

export default Loginpage;
