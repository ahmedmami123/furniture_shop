import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigationType,
} from "react-router-dom";
import "../App.css";
import { userLogin, userRegister } from "../redux/userSlice/userSlice";
import "./login.css";
import Footer from "./Footer";

function Login({ setnav, setpp }) {
  useEffect(() => {
    setnav("");
    setpp("");
  }, []);
  const location = useLocation();

  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loginemail, setloginemail] = useState(false);
  const [loginpassword, setloginpassword] = useState(false);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  console.log(loginemail);
  function clickerror() {
    if (!isValidEmail(login?.email)) {
      setloginemail(true);
    } else {
      setloginemail(false);
    }
    if (login?.password.length < 6) {
      setloginpassword(true);
    } else {
      setloginpassword(false);
    }

    if (login?.email.length != 0 && login?.password.length >= 6) {
      dispatch(userLogin(login));
      setTimeout(() => {
        navigate("/profil");
      }, 2000);
    }
  }
  const [register, setRegister] = useState({
    name: "",
    Lastname: "",
    email: "",
    password: "",
  });
  const [registername, setregistername] = useState(false);
  const [registerlastname, setregisterlastname] = useState(false);

  const [registeremail, setregisteremail] = useState(false);
  const [registerpassword, setregisterpassword] = useState(false);
  function clickerrorregister() {
    if (register?.name.length == 0) {
      setregistername(true);
    } else {
      setregistername(false);
    }
    if (register?.Lastname.length == 0) {
      setregisterlastname(true);
    } else {
      setregisterlastname(false);
    }
    if (!isValidEmail(register?.email)) {
      setregisteremail(true);
    } else {
      setregisteremail(false);
    }
    if (register?.password.length < 6) {
      setregisterpassword(true);
    } else {
      setregisterpassword(false);
    }

    if (
      register?.Lastname.length != 6 &&
      register?.name.length != 0 &&
      register?.email.length != 0 &&
      register?.password.length >= 6
    ) {
      dispatch(userRegister(register));
      setTimeout(() => {
        navigate("/profil");
      }, 2000);
    }
  }
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  let navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [validat, setvalidat] = useState(false);
  return (
   
    <div className="Login_Register">
       <div className="ImageCoverContent">
        
        <img src="https://images6.alphacoders.com/125/1257448.jpg" />
        <div className="trablack">
          <div className="Login_Register-soustiltle">
            <h1>CUSTOMER PAGE</h1>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>{" "}
              / <span>Login & Register</span>
            </p>
          </div>
        </div>
      </div> 
      <div className={!validat ? "all_content" : "all_content2"}>
        <div className={!validat ? "register" : "register pos"}>
          <div className="titre">
            <p>REGISTER NOW</p>
            <button onClick={() => setvalidat(!validat)}>LOG IN</button>
          </div>
          <div className="form">
            {" "}
            <input
              type="text"
              placeholder="First name:*"
              onChange={(e) =>
                setRegister({ ...register, name: e.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder="Last name:*"
              onChange={(e) =>
                setRegister({ ...register, Lastname: e.target.value })
              }
            ></input>
            <input
              type="email"
              placeholder="Email:*"
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            ></input>
            <input
              type="password"
              placeholder="Password:*"
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
            ></input>
          </div>
          <div className="term">
            <div className="radio">
              <label class="rad-label">
                <input type="radio" class="rad-input" name="rad" />
                <div class="rad-design"></div>
              </label>
            </div>
            <div className="text">
              <p>
                Thave read and accepted the terms, as well as read and
                understood our terms of business contidions
              </p>
            </div>
          </div>
          <button
            className="button"
            onClick={() => {
              dispatch(userRegister(register));
              setTimeout(() => {
                navigate("/");
              }, 2000);
            }}
          >
            Create account
          </button>
        </div>
        <div className="login">
          <div className="titre">
            <p>SIGN IN</p>
            <button onClick={() => setvalidat(!validat)}>
              CREATE AN ACCOUNT
            </button>
          </div>
          <div className="form">
            {" "}
            <input
              type="email"
              placeholder="Email:*"
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            ></input>
            <input
              type="password"
              placeholder="Password:*"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            ></input>
          </div>

          <button
            className="button"
            onClick={() => {
              dispatch(userLogin(login));
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }}
          >
            Login
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
