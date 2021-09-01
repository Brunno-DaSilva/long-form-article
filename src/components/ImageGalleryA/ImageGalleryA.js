import React from "react";
import ImageGallery from "react-image-gallery";
import "./imageGalleryA.css";

const ImageGalleryA = ({ imageGallery }) => {
  return (
    <div className="ImageGalleryA">
      <p>Image ImageGallery</p>
      <ImageGallery items={imageGallery} />
    </div>
  );
};

export default ImageGalleryA;
