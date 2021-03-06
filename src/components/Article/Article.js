import React, { Children } from "react";
import "./Article.css";
import ArticleIntro from "./ArticleIntro";

const Article = ({
  header,
  subHeader,
  articleSummary,
  articleSummaryTwo,
  authorName,
  readingTime,
  DateTime,
}) => {
  return (
    <div className="Article">
      <div className="Article_header">
        <h1 className="Article_header__title">{header}</h1>

        {header ? (
          <div className="Article_header__info">
            <p className="Article_header__info-item"> {authorName}</p>
            <p className="Article_header__info-item">{readingTime} min read</p>
            <p className="Article_header__info-item">{DateTime}</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="Article_body">
        <div className="Article_body__subtitle">
          <h2>{subHeader}</h2>
        </div>

        <div className="Article_body__text">
          <p className="dropcap">{articleSummaryTwo}</p>
        </div>
        <div className="Article_body__text">
          <ArticleIntro articleSummary={articleSummary} />
        </div>
      </div>
    </div>
  );
};

export default Article;
