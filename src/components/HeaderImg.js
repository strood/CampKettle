import React from 'react';
import img from '../img/kettle-and-cup-in-front-of-tent.jpg';
// /home/strood/prog/odin/CampKettle/src/img/kettle-and-cup-in-front-of-tent.jpg
// /home/strood/prog/odin/CampKettle/src/img/warming-hands-on-campfire-coffee.jpg

export default function HeaderImg() {
  return (
    <>
      <div className='headerImgDiv'>
        <img src={img} alt='Kettle and cup in campsite' className='headerImg' />
      </div>
    </>
  );
}
