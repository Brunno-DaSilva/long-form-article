import React, { useEffect, useRef, useState } from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

import SchoolModal from "../SchoolModal/SchoolModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

const Modal = ({
  title,
  items,
  openModalHandler,
  setOpenModal,
  SCHOOL_DATA,
  ...otherSectionProps
}) => {
  // To close the menu I used the reference to the current event of the btn
  // outside of this event will cause the menu to close
  // clicking on other btn will cause the menu to close.
  let menuRef = useRef();
  const [openSchool, setOpenSchool] = React.useState(false);

  useEffect(() => {
    let clickHandler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  });

  const openSchoolOnClick = () => {
    setOpenSchool((prevState) => !prevState);
  };

  return (
    <>
      <div className="Modal">
        <button
          class="nav__button_close"
          onClick={openModalHandler}
          type="button"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3>{title}</h3>
        <div className={title} ref={menuRef}>
          {items.map((data) => {
            if (!data.subItems) {
              return (
                <div id={otherSectionProps.id}>
                  <p>
                    <a className={data.CSS_class} href={data.url}>
                      {data.name}
                    </a>
                  </p>
                </div>
              );
            } else {
              return (
                <div className="Modal__school" id={otherSectionProps.id}>
                  <div className="Modal__tab">
                    <Menu
                      menuButton={<MenuButton> {data.name}</MenuButton>}
                      transition
                    >
                      {data.subItems.map((subMenu) => {
                        return (
                          <MenuItem
                            styles={{
                              cursor: "pointer",
                              color: "#184366",
                              backgroundColor: "transparent",
                              boxShadow: "none",
                              hover: {
                                color: "#e95b37",
                                backgroundColor: "transparent",
                              },
                              active: {
                                backgroundColor: "transparent",
                                color: "#e95b37",
                              },
                            }}
                          >
                            {subMenu.name}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {openSchool && (
          <SchoolModal
            items={items}
            {...otherSectionProps}
            setOpenSchool={setOpenSchool}
            openSchoolOnClick={openSchoolOnClick}
            SCHOOL_DATA={SCHOOL_DATA}
          />
        )}
      </div>
    </>
  );
};

export default Modal;
