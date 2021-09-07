import React from "react";
import "./Blockquote.css";

const Blockquote = ({ blockquote, blockquoteAuthor }) => {
  return (
      <blockquote>
        {blockquote}
        <span>{blockquoteAuthor}</span>
      </blockquote>    
  );
};

export default Blockquote;
