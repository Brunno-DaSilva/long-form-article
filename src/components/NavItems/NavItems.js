import React, { useState } from "react";

import Modal from "../Modal/Modal";

import "./navItems.css";

const NavItems = ({ title, items, ...otherSectionProps }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <div className="NavItems">
      <button onClick={openModalHandler} type="button" className="nav__button">
        {title}
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
  );
};

export default NavItems;
