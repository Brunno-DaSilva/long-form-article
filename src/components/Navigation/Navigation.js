import React from "react";
import { useState } from "react";
import NavItems from "../NavItems/NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as FLogo } from "../../img/fisd-logo-white-rgb.svg";

import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "./Navigation.css";

const Navigation = ({ NAV_DATA }) => {
  return (
    <div className="Navigation">
      <div className="nav__logo">
        <FLogo />
      </div>
      <div className="nav__container">
        {NAV_DATA.slice(0, 2).map(({ id, ...otherSectionProps }) => {
          return <NavItems key={id} {...otherSectionProps} />;
        })}
        <p>
          <a className="nav__a" href="https://www.friscoisd.org/departments">
            DEPARTMENTS
          </a>
        </p>

        {NAV_DATA.slice(-2).map(({ id, ...otherSectionProps }) => {
          return <NavItems key={id} {...otherSectionProps} />;
        })}
      </div>
      <div className="nav__icons">
        <FontAwesomeIcon className="nav__icons-item" icon={faSearch} />
        <FontAwesomeIcon className="nav__icons-item" icon={faTwitter} />
        <FontAwesomeIcon className="nav__icons-item" icon={faFacebook} />
        <FontAwesomeIcon className="nav__icons-item" icon={faYoutube} />
        <FontAwesomeIcon className="nav__icons-item" icon={faInstagram} />
        <FontAwesomeIcon className="nav__icons-item" icon={faLinkedinIn} />
      </div>
    </div>
  );
};

export default Navigation;
