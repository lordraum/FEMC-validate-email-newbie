import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Icon from "./Icon";

const Social = () => {
  return (
    <div className="social-icons">
      <Icon>
        <FaFacebookF className="fa__icon" />
      </Icon>
      <Icon>
        <FaTwitter className="fa__icon" />
      </Icon>
      <Icon>
        <FaInstagramSquare className="fa__icon" />
      </Icon>
    </div>
  );
};

export default Social;
