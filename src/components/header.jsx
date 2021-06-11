import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <Link to="/landing" className="header__first">
        <img className="header__logo" alt={"Logo"} />
      </Link>
    </div>
  );
}
