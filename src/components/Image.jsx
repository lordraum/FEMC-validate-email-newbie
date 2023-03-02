import React from "react";

const Image = ({ image, text, classText }) => {
  return (
    <picture className={classText}>
      <img src={image} alt={text} />
    </picture>
  );
};

export default Image;
