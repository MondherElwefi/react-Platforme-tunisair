import * as React from "react";
import { auth } from '../../firebase/config';
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";

function NavBar(props) {
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("signout done")
      navigate("/")
    }).catch((error) => {
      console.log("signout error")
    });
  };
  
  return (
    <ul className="nav-links">
        <li>
          <img
            src="/images/logoTunisair.png"
            alt="Tunisair Logo"
            style={{ width: "150px", height: "auto" }}
          />
        </li>
        <li className="center">
          <a href="/dashboard">Dashboard</a>
        </li>
        <li className="center">
          <a href="/profil">Profil</a>
        </li>
        <li onClick={()=>{
          handleSignout()
        }} className="center">
          <a>Logout</a>
        </li>   
      </ul>
    
  );
}



export default NavBar;
