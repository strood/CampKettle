import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SummaryItem({ id, name, price, img, amt }) {
  const className = img.prefix + '-' + img.iconName;

  return (
    <div className='summaryItem'>
      <div className={`summaryItemImgDiv ${className}`}>
        <FontAwesomeIcon icon={img} />
      </div>

      <div className='summaryAmtDot'>{amt}</div>
      <div className='summaryItemInfoDiv'>
        <h4>{name}</h4>
        <h3>${(price * amt).toFixed(2)}</h3>
      </div>
    </div>
  );
}
