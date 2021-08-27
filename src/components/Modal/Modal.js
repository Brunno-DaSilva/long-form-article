import React from "react";
import "./modal.css";

const Modal = ({ title, items, openModalHandler, ...otherSectionProps }) => {
  console.log(items);

  return (
    <div className="Modal">
      <button type="button">X</button>
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
