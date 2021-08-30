import React from "react";

const LandingPage = ({ isVideo, landingPageURL_img, landingPageURL_video }) => {
  return (
    <div className="LandingPage">
      {isVideo ? (
        <div>
          <video width="1600" height="auto" controls>
            <source src={landingPageURL_video} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div>
          <img src={landingPageURL_img} alt="Landing Page" />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
