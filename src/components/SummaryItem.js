import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SummaryItem({ id, name, price, img, imgName, amt }) {
  return (
    <div className='summaryItem'>
      <div className={`summaryItemImgDiv ${imgName}`}>
        <img src={`${img}`} className={`${imgName}`} alt='Logo' />
      </div>

      <div className='summaryAmtDot'>{amt}</div>
      <div className='summaryItemInfoDiv'>
        <h4>{name}</h4>
        <h3>${(price * amt).toFixed(2)}</h3>
      </div>
    </div>
  );
}
