import React, { useState } from "react";

import "./signup.css";

import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import SaveUserData from "../services/register";

function Signup() {
  const [data, setData] = useState({
    name: "",

    address: "",
    phone: "",

    gender: "",

    email: "",

    username: "",

    password: "",

    country: "",
  });

  const { name, address, phone, email, username, password, country } = data;

  const changeHandeler = (e) => {
    setData({
      ...data,

      [e.target.name]: [e.target.value],
    });
  };

  const [gender, setGender] = React.useState();

  const handleChange = (e) => {
    const target = e.target;

    if (target.checked) {
      setGender(target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    SaveUserData(data, gender);

    console.log("submit");
  };

  return (
    <div>
      <Navbar />

      <div className="main-page">
        <div className="smooth signup " id="signup">
          <h1 className="signup__header header">Create a new account</h1>

          <fieldset className="form">
            <form onSubmit={submitHandler} className="form__body form-login">
              <div className="input__group">
                <input
                  className="form__input form__input-half"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  onChange={changeHandeler}
                  value={name}
                />

                <input
                  className="form__input form__input-half"
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={changeHandeler}
                  value={address}
                />

                <input
                  className="form__input form__input-half"
                  type="text"
                  placeholder="Country"
                  name="country"
                  onChange={changeHandeler}
                  value={country}
                />

                <input
                  className="form__input form__input-half"
                  type="number"
                  name="phone"
                  onChange={changeHandeler}
                  placeholder="Phone"
                  value={phone}
                />
              </div>

              <div className="input__group">
                <input
                  className="form__input form__input-half"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={changeHandeler}
                  value={email}
                />

                <input
                  className="form__input form__input-half"
                  type="text"
                  placeholder="Gender"
                  name="gender"
                  onChange={changeHandeler}
                  value={gender}
                />

                <input
                  className="form__input form__input-half"
                  type="userName"
                  name="username"
                  placeholder="Username"
                  onChange={changeHandeler}
                  value={username}
                />

                <input
                  className="form__input form__input-half"
                  type="password"
                  placeholder="Password"
                  onChange={changeHandeler}
                  name="password"
                  value={password}
                />
              </div>

              <div className="input__group">
                <Link to="/login">Have an account? Login</Link>
              </div>

              <button className="btn" type="submit">
                Sign up
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Signup;
