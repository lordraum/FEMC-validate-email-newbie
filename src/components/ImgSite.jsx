import React from "react";
import illustration from "../assets/img/illustration-dashboard.png";
import Image from "./Image";

const ImgSite = () => {
  return (
    <section className="preview">
      <Image image={illustration} text="Preview of the site" />
    </section>
  );
};

export default ImgSite;
