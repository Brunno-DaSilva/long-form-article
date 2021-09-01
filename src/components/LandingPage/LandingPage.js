import React from "react";

import "./landingPage.css";

const LandingPage = ({ isVideo, landingPageURL_img, landingPageURL_video }) => {
  return (
    <>
      <div className="LandingPage">
        <div className="overlayLandingPage"></div>
        {isVideo ? (
          <div>
            <video width="100%" height="auto" autoplay loop muted>
              <source src={landingPageURL_video} type="video/mp4" />
            </video>
          </div>
        ) : (
          <div>
            <img src={landingPageURL_img} alt="Landing Page" />
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;
