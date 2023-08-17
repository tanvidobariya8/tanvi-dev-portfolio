import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/loginpage"}>loginpage</NavLink>
        <NavLink to={"/userlist"}>userlist</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
