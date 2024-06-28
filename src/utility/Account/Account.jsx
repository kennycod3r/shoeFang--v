import React from "react";
import accountIcon from "../../assets/account2.svg";
import "./Account.css";

const Account = () => {
  return (
    <div className="account">
      <div className="circle-acc">
        <img src={accountIcon} loading="lazy" alt="account" />
      </div>
      <ul>
        <li className="log">Log in</li>
      </ul>
    </div>
  );
};

export default Account;
