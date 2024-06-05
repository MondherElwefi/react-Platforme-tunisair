import * as React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../pages/loading/Loading";
import "./Profil.css";
import Avatar from "@mui/material/Avatar";
import NavBar from "../navbar/NavBar";
import { deleteUser ,updateProfile} from "firebase/auth";
import { useState } from 'react';
import {useEffect } from 'react';

export default function Profil() {
  const [user, loading, error] = useAuthState(auth);
  const [userName,setUserName] = useState("");
  const navigate = useNavigate();
  
  const handleUpdateUserName=(eo)=>{
    eo.preventDefault()
    updateProfile(auth.currentUser, {
      displayName:userName
    }).then(() => {
      // Profile updated!
      // ...
      console.log("esem tbadel")
    }).catch((error) => {
      // An error occurred
      // ...
      console.log("esem errr")
      console.log(error.message)
    });
  }
  const handleDeleteAccount=(eo)=>{
    eo.preventDefault();
    deleteUser(user).then(() => {
      // User deleted.
      console.log("tfase5")
      navigate('/signup')
    }).catch((error) => {
      // An error ocurred
      // ...
      console.log(error.message)
    });
  }
  
  
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    navigate("/");
  }
  if (user)
    return (
      <>
        <NavBar />
        <div className="profil">
          <div
            className="box-root flex-flex flex-direction--column"
            style={{ minHeight: "100vh", flexGrow: 1 }}
          >
            <div
              className="box-root padding-top--24 flex-flex flex-direction--column"
              style={{ flexGrow: 1, zIndex: 9 }}
            >
              <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                <img
                  src="/images/logoTunisair.png"
                  alt="logo-tunisair"
                  width="450px"
                />
              </div>
              <div className="formbg-outer">
                <div className="formbg">
                  <div className="formbg-inner padding-horizontal--48">
                    <Avatar className="avatar">
                      {user.displayName.charAt(0).toUpperCase()}
                    </Avatar>
                    <div id="stripe-login">
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Nom d'utilisateur</label>
                        <input
                          type="text"
                          name="email"
                          defaultValue={user.displayName}
                          onChange={(eo)=>{setUserName(eo.target.value)}}
                        />
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">E-mail</label>
                        <input
                          type="email"
                          name="email"
                          defaultValue={user.email}
                         
                        />
                      </div>
                    
                      <div className="field padding-bottom--24">
                        <input
                          type="submit"
                          name="submit"
                          value="Supprimer Le Compte"
                          onClick={(eo)=>{
                            handleDeleteAccount(eo)
                          }}
                        />
                      </div>
                      <div className="field padding-bottom--24">
                        <input
                          type="submit"
                          name="submit"
                          value="Enregistrée"
                          onClick={(eo)=>{
                            handleUpdateUserName(eo);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
