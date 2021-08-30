import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";

import "./navItems.css";

const NavItems = ({ title, items, ...otherSectionProps }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal((prevState) => !prevState);
  };

  // To close the menu I used the reference to the current event of the btn
  // outside of this event will cause the menu to close
  // clicking on other btn will cause the menu to close.
  let menuRef = useRef();

  useEffect(() => {
    let clickHandler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  });

  return (
    <>
      <div ref={menuRef} className="NavItems">
        <button
          onClick={openModalHandler}
          type="button"
          className="nav__button"
          id={title}
        >
          {title}{" "}
          <span>
            {openModal ? (
              <FontAwesomeIcon className="nav__icons-item" icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon className="nav__icons-item" icon={faAngleDown} />
            )}
          </span>
        </button>

        {openModal && (
          <Modal
            title={title}
            items={items}
            {...otherSectionProps}
            openModalHandler={openModalHandler}
          />
        )}
      </div>
    </>
  );
};

export default NavItems;
