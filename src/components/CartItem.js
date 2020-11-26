import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWater,
  faDove,
  faPaw,
  faMountain,
  faSun,
  faFireAlt,
  faGlobe,
  faPlusSquare,
  faMinusSquare,
} from '@fortawesome/free-solid-svg-icons';

export default function CartItem({ id, name, price, img, amt }) {
  const [qtyVal, setQtyVal] = useState(amt);
  const handleChange = (e) => {
    setQtyVal(e.target.value);
  };

  const updateCartItem = (e, newVal) => {
    if (newVal < 0) {
      newVal = 0;
    }
    console.log('update this item to this value');
    console.log(e);
    console.log(newVal);
    console.log('===========================');
  };

  const className = img.prefix + '-' + img.iconName;
  return (
    <div className='cartItem'>
      <div className={`cartItemImgDiv ${className}`}>
        <FontAwesomeIcon icon={img} />
      </div>
      <div className='cartItemInfoDiv'>
        <div className='cartNameDiv'>
          <h4>{name}</h4>
          <button onClick={(e) => updateCartItem(e, 0)}>Remove</button>
        </div>
        <div className='cartQtyDiv'>
          <label htmlFor='qtyInput'>Qty:</label>
          <input
            className='qtyInput'
            type='text'
            placeholder={qtyVal}
            onChange={handleChange}
          />
          <button onClick={(e) => updateCartItem(e, qtyVal)}>Update</button>
        </div>
        <div className='cartItemPrice'>
          <div>
            <h4>${price}</h4>
            <p>/bag</p>
          </div>
          <div>
            <hr />
            <h4>${price * amt}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
