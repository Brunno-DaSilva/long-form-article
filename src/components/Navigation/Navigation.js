import React, { useState, useEffect } from "react";
import NavItems from "../NavItems/NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as FLogo } from "../../img/fisd-logo-white-rgb.svg";
import { ReactComponent as FLogoSM } from "../../img/Fsun_SM.svg";
import { ReactComponent as FLogoMD } from "../../img/FsunFISD_MD.svg";

import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "./Navigation.css";

//Window Size hooks
function useWindowSize() {
  const [windowSize, setWindowSize] = useState([
    window.innerHeight,
    window.innerWidth,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

const Navigation = ({ NAV_DATA }) => {
  const [height, width] = useWindowSize();

  console.log(`height ${height}, width ${width}`);

  return (
    <div className="Navigation">
      <div className="nav__zero"></div>
      <div className="nav__logo">
        <FLogo />
      </div>
      <div className="nav__container">
        {NAV_DATA.slice(0, 2).map(({ id, ...otherSectionProps }) => {
          return <NavItems key={id} {...otherSectionProps} />;
        })}
        <button>
          <a className="nav__a" href="https://www.friscoisd.org/departments">
            DEPARTMENTS
          </a>
        </button>

        {NAV_DATA.slice(-2).map(({ id, ...otherSectionProps }) => {
          return <NavItems key={id} {...otherSectionProps} />;
        })}
      </div>
      <div className="nav__icons" ariaLabel="Clickable social media icons">
        <FontAwesomeIcon className="nav__icons-item" icon={faSearch} />
        <FontAwesomeIcon className="nav__icons-item" icon={faTwitter} />
        <FontAwesomeIcon className="nav__icons-item" icon={faFacebook} />
        <FontAwesomeIcon className="nav__icons-item" icon={faYoutube} />
        <FontAwesomeIcon className="nav__icons-item" icon={faInstagram} />
        <FontAwesomeIcon className="nav__icons-item" icon={faLinkedinIn} />
      </div>

      <div className="nav__last"></div>
    </div>
  );
};

export default Navigation;
