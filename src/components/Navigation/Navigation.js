import React from "react";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { ReactComponent as FLogo } from "../../img/fisd-logo-white-rgb.svg";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="nav__logo">
        <FLogo />
      </div>
      <div className="nav__container">
        <button type="button" className="nav__button">
          NEWS
        </button>
        <button type="button" className="nav__button">
          ABOUT
        </button>
        <button type="button" className="nav__button">
          DEPARTMENTS
        </button>

        <button type="button" className="nav__button">
          SCHOOLS
        </button>
        <button type="button" className="nav__button">
          EMPLOYMENT
        </button>
      </div>
      <div className="nav__icons">
        <FontAwesomeIcon className="nav__icons-item" icon={faSearch} />
        <FontAwesomeIcon className="nav__icons-item" icon={faTwitter} />
        <FontAwesomeIcon className="nav__icons-item" icon={faFacebook} />
        <FontAwesomeIcon className="nav__icons-item" icon={faYoutube} />
        <FontAwesomeIcon className="nav__icons-item" icon={faInstagram} />
        <FontAwesomeIcon className="nav__icons-item" icon={faLinkedinIn} />
      </div>
      <Modal />
    </div>
  );
};

export default Navigation;
