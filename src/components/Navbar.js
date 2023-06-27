import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.css";
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  const user = useSelector((state) => state.loggedInUser);
  console.log(user);

  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch({
      type: "SET_LOGOUT",
      payload: null,
    });
  };

  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <Link to="/" className="logo">
            ForexExchange
          </Link>
          <ul className="links">
            <li>Home</li>
            {user !== null ? (
              <>
                {" "}
                <button className="logout_btn" onClick={() => userLogout()}>
                  <li>Logout</li>
                </button>{" "}
                <Link to="/profile">
                  <Avatar
                    cur
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li>Login</li>
                </Link>
                <Link to="/signup">
                  <li>Register</li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
}
