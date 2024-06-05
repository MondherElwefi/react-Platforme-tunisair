import * as React from 'react';
import {auth}  from "../../firebase/config"
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../loading/Loading";
import {updateProfile } from "firebase/auth";


export default function SignUp() {

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [userName,setUserName]=useState("");
  const [showError, setshowError] = useState(false);

  // Firebase Function To create UserName
   const handleUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then(() => {
        // Profile updated! 
        console.log("esem jawou bhy")
      })
      .catch((error) => {
        // An error occurred
        console.log("esem mahouche jawou bhy")
      });   
  };

// Firebase Function To create UserName
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 

    const user = userCredential.user;
    handleUserName()
    console.log("signup done")
    
    navigate("/dashboard");
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
    setshowError(true)
    console.log("signup not done")
    // ..
  });   
  };

  if (loading) {
    return <Loading/>
  }
  if (user) {
    navigate("/dashboard");
  }else
  return (
    <div className="signup">
    <div
      className="box-root flex-flex flex-direction--column"
      style={{ minHeight: "100vh", flexGrow: 1 }}
    >
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div
            className="box-root flex-flex"
            style={{ gridArea: "top / start / 8 / end" }}
          >
            <div
              className="box-root"
              style={{
                backgroundImage:
                  "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                flexGrow: 1
              }}
            ></div>
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "4 / 2 / auto / 5" }}
          >
            <div
              className="box-root box-divider--light-all-2 animationLeftRight tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "6 / start / auto / 2" }}
          >
            <div
              className="box-root box-background--blue800"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "7 / start / auto / 4" }}
          >
            <div
              className="box-root box-background--blue animationLeftRight"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "8 / 4 / auto / 6" }}
          >
            <div
              className="box-root box-background--gray100 animationLeftRight tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "2 / 15 / auto / end" }}
          >
            <div
              className="box-root box-background--cyan200 animationRightLeft tans4s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "3 / 14 / auto / end" }}
          >
            <div
              className="box-root box-background--blue animationRightLeft"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "4 / 17 / auto / 20" }}
          >
            <div
              className="box-root box-background--gray100 animationRightLeft tans4s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "5 / 14 / auto / 17" }}
          >
            <div
              className="box-root box-divider--light-all-2 animationRightLeft tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
        </div>
      </div>

      <div
        className="box-root padding-top--24 flex-flex flex-direction--column"
        style={{ flexGrow: 1, zIndex: 9 }}
      >
        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <img src="/images/logoTunisair.png" alt="logo-tunisair" width="450px" />
        </div>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">
              Créez votre compte
              </span>
              <div id="stripe-login">
              <div className="field padding-bottom--24">
                  <label htmlFor="email">Nom d'utilisateur</label>
                  <input type="text" name="email" onChange={(eo)=>{
                    setUserName(eo.target.value)
                  }}/>
                </div>
                <div className="field padding-bottom--24">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" name="email" onChange={(eo)=>{
                    setEmail(eo.target.value)
                  }}/>
                </div>
                <div className="field padding-bottom--24">
                  <div className="grid--50-50">
                    <label htmlFor="password">Mot de passe</label>
                  </div>
                  <input type="password" name="password" onChange={(eo)=>{
                    setPassword(eo.target.value)
                  }}/>
                </div>
                <div className="footer-link padding-top--24">
                      
                       {showError && <span style={{color:"red" }}>Verifier bien les Champ</span>}
                      
                    </div>
                <div className="field padding-bottom--24">
                  <input type="submit" name="submit" value="Crée" onClick={(eo)=>{
                    handleSubmit(eo)
                  }} />
                </div>
                
              </div>
            </div>
          </div>
          <div className="footer-link padding-top--24">
            <span>
            Vous avez déjà un compte? ? <a href="/">Se connecter</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}