import React from 'react';
import img from '../img/camping-kettle-and-coffee-cup.jpg';
// /home/strood/prog/odin/CampKettle/src/img/kettle-and-cup-in-front-of-tent.jpg

export default function BackgroundImg() {
  return (
    <>
      <div className='backgroundImgDiv'>
        <img
          src={img}
          alt='Kettle and cup in campsite'
          className='backgroundImg'
        />
      </div>
    </>
  );
}
