import React from "react";
import logo from "../assets/img/logo.svg";
import Image from "./Image";

const Header = ({ title, subtitle, spanText }) => {
  return (
    <header className="site-header">
      <Image image={logo} text="PING's logo" classText={"img-container"} />
      <div className="site-header__text">
        <h1 className="site-header__title">
          {title}
          <span className="site-header__span">{` ${spanText}`}</span>
        </h1>
        <h2 className="site-header__subtitle">{subtitle}</h2>
      </div>
    </header>
  );
};

export default Header;
