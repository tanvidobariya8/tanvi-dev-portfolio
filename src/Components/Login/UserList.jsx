import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigation = useNavigate();


  const handleLogout=()=>{
 navigation("/loginpage");
  }
  return (
    <div>
      <h1>userList</h1>
      <button onClick={handleLogout}>log Out</button>
    </div>
  );
};

export default UserList;
