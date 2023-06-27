import React, { useState } from "react";
import "./signup.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const changeHandeler = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };

  const submitLoginCustomer = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:2000/api/bank/user/login/`,
        {
          headers: {
            Authorization: `Basic ${btoa(email + ":" + password)}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(res);
      dispatch({
        type: "SET_LOGIN",
        payload: res.data,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  const submitLoginAdmin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:2000/api/bank/user/admin/login/`,
        {
          headers: {
            Authorization: `Basic ${btoa(email + ":" + password)}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(res);
      dispatch({
        type: "SET_LOGIN",
        payload: res.data,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };
  // const submitLogin = (e) => {
  //   e.preventDefault();
  //   getLogin(email, password);
  // }

  return (
    <div>
      <Navbar />
      <div className="main-page">
        <div className="smooth login" id="login">
          <h1 className="login__header header">Welcome</h1>
          {/* <p className="login__byline">
            It's good to see you again, come in using your favourite social
            network
          </p>
          <div className="social-media__container">
            <span className="fa-stack fa-lg social-media__icon icon">
              <FacebookIcon />
            </span>
            <span className="fa-stack fa-lg social-media__icon icon">
              <GoogleIcon />
            </span>
            <span className="fa-stack fa-lg social-media__icon icon">
              <GitHubIcon />
            </span>
          </div> */}
          <fieldset className="form">
            {/* <legend className="form__legend">OR</legend> */}
            <form action="" className="form__body form-login">
              <input
                className="form__input"
                value={email}
                onChange={changeHandeler}
                name="email"
                type="text"
                placeholder="Username"
                autoComplete="email"
              />
              <input
                className="form__input"
                type="password"
                name="password"
                value={password}
                onChange={changeHandeler}
                placeholder="password"
                autoComplete="current-password"
              />

              <div className="input__group">
                <Link to="/signup">Don't have an Account? Signup</Link>
              </div>
              <div className="login_btns">
                <button
                  className="btn"
                  onClick={submitLoginCustomer}
                  type="submit"
                >
                  Sign in as Customer
                </button>
                &nbsp;
                <button
                  className="btn"
                  onClick={submitLoginAdmin}
                  type="submit"
                >
                  Sign in as Admin
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Login;
