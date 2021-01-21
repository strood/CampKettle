import React from 'react';

export default function SummaryItem({ id, name, price, img, amt }) {
  return (
    <div className='summaryItem'>
      <div className={`summaryItemImgDiv `}>
        <div className='imgDiv'>
          <img
            src={`https://www.campkettle.website/images/${img}.svg`}
            alt='Logo'
          />
        </div>
      </div>

      <div className='summaryAmtDot'>{amt}</div>
      <div className='summaryItemInfoDiv'>
        <h4>{name}</h4>
        <h3>${(price * amt).toFixed(2)}</h3>
      </div>
    </div>
  );
}
