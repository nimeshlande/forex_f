import React from "react";
import "./home.css";
import homeImg from "../assets/images/home.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Calculator from "./Calculator";

function Home() {
  return (
    <div>
      <div className="landing-page">
        <Navbar />
        <div className="content">
          <div className="container">
            <div className="info">
              <h1>Save when you send worldwide</h1>
              <p>
                Get your money moving internationally. Save up to 3.9x when you
                send with Wise.
              </p>
              <Link to="/sendmoney">
                <button className="send_money_btn">Send Money Now</button>
              </Link>
              &nbsp;
              <Link to="/account">
                <button className="open_account_btn">Open Account</button>
              </Link>
            </div>
            <div className="image">
              <img src={homeImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
