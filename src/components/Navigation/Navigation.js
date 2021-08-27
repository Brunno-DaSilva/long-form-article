import React from "react";
import Modal from "../Modal/Modal";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <button type="button" className="btn">
        Schools
      </button>
      <Modal />
    </div>
  );
};

export default Navigation;
