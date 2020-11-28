import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../context';

export default function CartItem({ id, name, price, img, amt }) {
  const { toggleAmount, toggleModal } = useGlobalContext();
  const [qtyVal, setQtyVal] = useState(amt);

  const className = img.prefix + '-' + img.iconName;

  const handleChange = (e) => {
    setQtyVal(e.target.value);
  };

  const removeItem = () => {
    toggleModal(true, 'remove', id);
  };
  const setQty = () => {
    toggleAmount(id, 'set', name, price, img, parseInt(qtyVal));
  };

  return (
    <div className='cartItem'>
      <div className={`cartItemImgDiv ${className}`}>
        <FontAwesomeIcon icon={img} />
      </div>
      <div className='cartItemInfoDiv'>
        <div className='cartNameDiv'>
          <h4>{name}</h4>
          <hr />
          <button onClick={() => removeItem(id)}>Remove</button>
        </div>
        <div className='cartQtyDiv'>
          <label htmlFor='qtyInput'>Qty:</label>
          <input
            className='qtyInput'
            type='number'
            value={qtyVal}
            onChange={handleChange}
          />
          <button onClick={() => setQty()}>Update</button>
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
