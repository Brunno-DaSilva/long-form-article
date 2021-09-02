import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

const Modal = ({
  title,
  items,
  openModalHandler,
  setOpenModal,
  ...otherSectionProps
}) => {
  // To close the menu I used the reference to the current event of the btn
  // outside of this event will cause the menu to close
  // clicking on other btn will cause the menu to close.
  let menuRef = useRef();

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
        <h1>{title}</h1>
        <div className={title} ref={menuRef}>
          {items.map((data) => {
            return (
              <div id={otherSectionProps.id}>
                <p>
                  <a href={data.url}>{data.name}</a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Modal;
