import React from "react";
import "./banner.css";

const Banner = (title, subtitle) => {
  return (
    <div>
      <>
        <div className="heading">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </>
    </div>
  );
};

export default Banner;
