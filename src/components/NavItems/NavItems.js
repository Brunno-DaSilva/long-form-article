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

  return (
    <>
      <div className="NavItems">
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
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </>
  );
};

export default NavItems;
