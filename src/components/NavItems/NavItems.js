import React from "react";
import "./navItems.css";

const NavItems = ({ title, ...otherSectionProps }) => {
  return (
    <div className="NavItems">
      <button type="button" className="nav__button">
        {title}
      </button>
    </div>
  );
};

export default NavItems;
