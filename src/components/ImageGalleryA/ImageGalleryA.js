import React from 'react';
import ImageGallery from 'react-image-gallery';

import './imageGalleryA.css'
// const images = [
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//   ];

const ImageGalleryA = ({imageGallery}) => {
  console.log(imageGallery)
    return (
        <div className="ImageGalleryA">
            <p>Image ImageGallery</p>            
            <ImageGallery items={imageGallery} />
        </div>
    );
}


export default ImageGalleryA;
