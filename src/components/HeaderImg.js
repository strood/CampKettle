import React from 'react';
import img from '../img/camping-kettle-and-coffee-cup.jpg';
// /home/strood/prog/odin/CampKettle/src/img/kettle-and-cup-in-front-of-tent.jpg

export default function HeaderImg() {
  return (
    <>
      <div className='headerImgDiv'>
        <img src={img} alt='Kettle and cup in campsite' className='headerImg' />
      </div>
    </>
  );
}
