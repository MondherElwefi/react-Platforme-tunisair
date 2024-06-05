import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../loading/Loading";
import "./SignIn.css";
import ForgetPassword from "../../components/forgetPassword/ForgetPassword";
import {useEffect } from 'react';

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showError, setshowError] = useState(false);
  let errorMessage


  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("done");
        setshowError(false)
        navigate("/dashboard");

      })
      .catch((error) => {
        errorMessage = error.message;
        console.log(errorMessage);
        setshowError(true)

      });
  };

  if (loading) {
    return <Loading />;
  }

  if (user) {
    navigate("/signup");
  } else

    return (
      <div className="login-root">
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
                    flexGrow: 1,
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
              <img
                src="/images/logoTunisair.png"
                alt="logo-tunisair"
                width="450px"
              />
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">
                    Connectez-vous à votre compte
                  </span>
                  <div id="stripe-login">
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        onChange={(eo) => {
                          setEmail(eo.target.value);
                        }}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Mot de passe</label>
                        <div className="reset-pass">
                          <h5
                            onClick={() => {
                              setShowForgetPassword(true);
                            }}
                          >
                            Mot de passe oublié?
                          </h5>
                        </div>
                      </div>
                      <input
                        type="password"
                        name="password"
                        onChange={(eo) => {
                          setPassword(eo.target.value);
                        }}
                      />
                    </div>
                    <div className="footer-link padding-top--24">
                      
                       {showError && <span style={{color:"red" }}>E-mail or mot de passe invalide</span>}
                      
                    </div>
                    <div className="field padding-bottom--24">
                      <input
                        type="submit"
                        name="submit"
                        value="Se connecter"
                        onClick={(eo) => {
                          handleSubmit(eo);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>
                  Vous n'avez pas de compte ? <a href="/signup">S'inscrire</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        {showForgetPassword && (
          <ForgetPassword setShowForgetPassword={setShowForgetPassword} />
        )}
      </div>
    );
}
