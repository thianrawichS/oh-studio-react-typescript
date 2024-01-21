import React from 'react';
import { Img } from '../types/Img';
import '../styles/Image.css';

const Image = (image: Img) => {
  const { id, url } = image;

  return (
    <>
      <div className="ratio ratio-4x3 image-block">
        <img src={url} alt={id} className="rounded-3" />

        <a href={url}>
          <div className="rounded-3 p-3 overlay">
            <div className="text-white ">{id}</div>
          </div>
        </a>
      </div>
      <div className="mt-2 image-title"> {id} </div>
    </>
  );
};

export default Image;
