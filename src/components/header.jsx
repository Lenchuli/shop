import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export function Header({ cart }) {
  return (
    <div className="header">
      <Link to="/landing" className="header__first">
        <img
          className="header__logo"
          alt={"Logo"}
          src="https://w7.pngwing.com/pngs/685/990/png-transparent-telephone-mobile-phone-accessories-nhyl-mobile-praxis-gabriel-logo-de-telefono-movil-rectangle-logo-grass.png"
        />
      </Link>
      <span>Cart: {cart}</span>
    </div>
  );
}
