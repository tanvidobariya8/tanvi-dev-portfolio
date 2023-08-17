import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/profile"}>profile</NavLink>
        <NavLink to={"/user"}>user</NavLink>
        <NavLink to={"/"}>logout</NavLink>
      </nav>
    </div>
  );
};

export default Header;
