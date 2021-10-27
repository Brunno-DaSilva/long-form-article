import React from "react";

const ArticleIntro = ({ articleSummary }) => {
  return articleSummary.length > 0 ? (
    <div className="ArticleIntro">
      <p>{articleSummary}</p>
    </div>
  ) : (
    <></>
  );
};

export default ArticleIntro;
