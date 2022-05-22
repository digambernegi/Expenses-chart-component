import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="Header__balance">
          <span className="balance">My balance</span>
          <p className="amount">$921.48</p>
        </div>
        <div className="Header__icon">
          <div className="empty__circle" />
          <div className="filled__circle" />
        </div>
      </div>
    </>
  );
}

export default Header;
