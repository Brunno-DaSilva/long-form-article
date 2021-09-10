import React, { useState, useEffect } from "react";
import NavItems from "../NavItems/NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
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

const Navigation = ({ NAV_DATA, SCHOOL_DATA }) => {
  const [height, width] = useWindowSize();

  const [searchOpen, setSearchOpen] = useState(false);

  const onClickSearchOpener = () => {
    setSearchOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="Navigation">
        <div className="nav__zero"></div>
        <div className="nav__logo">
          <a href="https://www.friscoisd.org/">
            <FLogo />
          </a>
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
            return (
              <NavItems
                SCHOOL_DATA={SCHOOL_DATA}
                key={id}
                {...otherSectionProps}
              />
            );
          })}
        </div>
        <div className="nav__icons" ariaLabel="Clickable social media icons">
          <div className="nav__search">
            {searchOpen ? (
              <div>
                <input
                  tabIndex="1"
                  type="text"
                  class="input"
                  id="input"
                  placeHolder="Search Here: FISD news, calendar, COVID-19 ..."
                />
                <FontAwesomeIcon
                  onClick={onClickSearchOpener}
                  className="nav__icons-item nav__icons-color"
                  icon={faTimes}
                />
              </div>
            ) : (
              <FontAwesomeIcon
                onClick={onClickSearchOpener}
                className="nav__icons-item"
                icon={faSearch}
              />
            )}
          </div>
          <FontAwesomeIcon className="nav__icons-item" icon={faTwitter} />
          <FontAwesomeIcon className="nav__icons-item" icon={faFacebook} />
          <FontAwesomeIcon className="nav__icons-item" icon={faYoutube} />
          <FontAwesomeIcon className="nav__icons-item" icon={faInstagram} />
          <FontAwesomeIcon className="nav__icons-item" icon={faLinkedinIn} />
        </div>
        <div className="nav__last"></div>
      </div>
      {searchOpen && (
        <>
          <div className="suggestion"></div>
          <div className="search-items">
            <h3>It is open</h3>
            <ul>
              <li>One </li>
              <li>Two </li>
              <li>Three </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
