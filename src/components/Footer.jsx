import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="footer">
      <Social />
      <p className="footer__copy">
        &copy; Copyright Ping. All rights reserved.
      </p>
      <p className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        Coded by <a href="https://github.com/lordraum">David Gómez</a>
      </p>
    </footer>
  );
};

export default Footer;
