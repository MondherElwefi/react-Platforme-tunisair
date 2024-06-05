import React from "react";
import "./ForgetPassword.css";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";


function ForgetPassword(props) {
  const [email, setEmail] = useState("");
  const [showDone, setShowDone] = useState("");

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        
        console.log("email teb3ath")
        setShowDone(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage)
      });
    };
    return (
      <div>
        <div className="forget-password">
          <div className="formbg-outer">
            <div className="formbg">
              <span
                className="close-forget"
                onClick={() => {
                  props.setShowForgetPassword(false);
                }}
              >
                X
              </span>
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">
                  Réinitialisez votre mot de passe
                </span>
                <div id="stripe-login">
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="text"
                      name="email"
                      onChange={(eo) => {
                        setEmail(eo.target.value);
                      }}
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Continue"
                      onClick={()=>{
                        handleForgetPassword()
                      }}
                    />
                  </div>
                  {showDone && <span className="padding-bottom--15">
                  Vérifiez votre E-mail
                </span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default ForgetPassword;
