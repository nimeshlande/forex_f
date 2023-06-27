import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AccountDeposit from "./AccountDeposit";
import AddAccount from "./AddAccount";
import TransferCurreny from "./TransferCurrency";
import TransferMoney from "./TransferMoney";
import Navbar from "./Navbar";

const Account = () => {
  const [componentNum, setComponentNum] = useState(0);

  const renderComponent = () => {
    if (componentNum === 0) {
      return <AddAccount />;
    } else if (componentNum === 1) {
      return <AccountDeposit />;
    } else if (componentNum === 2) {
      return <TransferCurreny />;
    } else {
      return <TransferMoney />;
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setComponentNum(0)}
            >
              Add Accounts
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setComponentNum(1)}
            >
              Deposit Amount
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setComponentNum(2)}
            >
              Transfer Currency
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setComponentNum(3)}
            >
              Send Money
            </button>
          </li>
        </ul>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default Account;
