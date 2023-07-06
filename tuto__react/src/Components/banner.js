import React from "react";
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";

function Banner() {
  const isHomePage = window.location.pathname === "/";

  return (
    <div className="banner">
      {isHomePage ? (
        <>
          <img src={img1} alt="rocher " />
          <h1>Chez vous, partout et ailleurs</h1>
        </>
      ) : (
        <img src={img2} alt="rocher " />
      )}
    </div>
  );
}

export default Banner;
