import React, { useState } from "react";
import Header from "./Components/header";
import { useNavigate, useNavigation } from "react-router-dom";

const Homepage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleOnClick = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("pleses fill a filde");
    } else {
      navigate("/loginpage");
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    }
  };

  return (
    <div>
      {/* <Header /> */}
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      password
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleOnClick}>sing up</button>
    </div>
  );
};

export default Homepage;
