import React from "react";
import "./Article.css";

const Article = (
                { header, 
                  subHeader, 
                  articleSummary, 
                  articleSummaryTwo, 
                  authorName, 
                  readingTime, 
                  DateTime}) => {
  console.log(header)
  return (
    <div className="Article">
      <div className="Article_header">
        <h1 className="Article_header__title">{header}</h1>
        
          <div className="Article_header__info">
            <p className="Article_header__info-item">By {authorName}</p>
            <p className="Article_header__info-item">{readingTime}min read</p>
            <p className="Article_header__info-item">{DateTime}</p>
        </div> 
      </div>


      <div className="Article_body"> 
        <div className="Article_body__text">
          <p>{articleSummary}</p>
        </div>
        <div className="Article_body__text">
          <p>{articleSummaryTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
