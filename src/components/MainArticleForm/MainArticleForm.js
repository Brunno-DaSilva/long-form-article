import React, { useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import Article from "../Article/Article";
import Blockquote from "../Blockquote/Blockquote";
import Parallax from "../Parallax/Parallax";
import ImageGalleryA from "../ImageGalleryA/ImageGalleryA";
import ImageContainer from "../ImageGalleryA/ImageContainer";

import "./mainArticleForm.css";

const MainArticleForm = ({ ARTICLE_DATA }) => {
  return (
    <div className="MainArticleForm">
      {ARTICLE_DATA.map(
        ({
          id,
          isVideo,
          landingPageURL_img,
          landingPageURL_video,
          parallaxUrl_img,
          header,
          subHeader,
          articleSummary,
          articleSummaryTwo,
          imageGallery,
          blockquote,
          blockquoteAuthor,
          authorName,
          readingTime,
          DateTime,
          parallax_text,
        }) => {
          return (
            <>
              <LandingPage
                key={id}
                isVideo={isVideo}
                landingPageURL_img={landingPageURL_img}
                landingPageURL_video={landingPageURL_video}
              />
              <Article
                header={header}
                articleSummary={articleSummary}
                authorName={authorName}
                readingTime={readingTime}
                DateTime={DateTime}
              />
              <Article
                subHeader={subHeader}
                articleSummary={articleSummary}
                articleSummaryTwo={articleSummaryTwo}
              />
              <Parallax
                parallaxUrl_img={parallaxUrl_img}
                parallax_text={parallax_text}
              />
              <Blockquote
                blockquote={blockquote}
                blockquoteAuthor={blockquoteAuthor}
              />

              <ImageContainer imageGallery={imageGallery} />
              <br />
              <br />
            </>
          );
        }
      )}
    </div>
  );
};

export default MainArticleForm;
