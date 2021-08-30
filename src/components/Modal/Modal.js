import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

const Modal = ({ title, items, openModalHandler, ...otherSectionProps }) => {
  return (
    <div className="Modal">
      <button
        class="nav__button_close"
        onClick={openModalHandler}
        type="button"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h1>{title}</h1>
      <div>
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
  );
};

export default Modal;
