import React, { useState, useEffect } from "react";
import "./Parallax.css";

const Parallax = ({ parallaxUrl_img, parallax_text }) => {
  const [offsetY, setOffsetY] = useState(0);
  const scrollHandler = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  console.log(parallax_text);

  return (
    <>
      <div
        className="Parallax"
        style={{
          backgroundImage: `url(${parallaxUrl_img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay"></div>

        <p className="Parallax__text">{parallax_text}</p>
      </div>
    </>
  );
};

export default Parallax;
