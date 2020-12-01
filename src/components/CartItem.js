import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../context';

const getItemStock = (id, stock) => {
  let item = stock.filter((item) => item.id === id);
  return item[0].itemStock;
};

export default function CartItem({ id, name, price, img, amt }) {
  const { adjustAmount, toggleModal, stock } = useGlobalContext();
  const [qtyVal, setQtyVal] = useState(amt);
  const [lowStock, setLowStock] = useState(false);
  const itemStock = getItemStock(id, stock);

  const className = img.prefix + '-' + img.iconName;

  const handleChange = (e) => {
    setQtyVal(e.target.value);
  };

  const toggleBadValue = () => {
    let input = document.querySelector(`#qtyInput${id}`);
    let note = document.querySelector(`#lowStockNote${id}`);

    input.style.border = '1px solid red';
    if (lowStock) {
      note.style.color = 'red';
    }
    setTimeout(() => {
      if (note) {
        note.style.color = '#363b3b';
      }
      input.style.border = '1px solid #4481a6';
      setQtyVal(amt);
      input.value = amt;
    }, 2000);
  };

  const removeItem = () => {
    toggleModal(true, 'remove', id);
  };

  const setQty = () => {
    if (qtyVal <= itemStock) {
      adjustAmount(id, 'set', name, price, img, parseInt(qtyVal));
    } else {
      setLowStock(true);
      toggleBadValue();
    }
  };

  useEffect(() => {
    if (itemStock < 5 || itemStock - qtyVal < 5) {
      setLowStock(true);
    }
  });

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
        <div className='cartQtyHolder'>
          <div className='cartQtyDiv'>
            <label htmlFor='qtyInput'>Qty:</label>
            <input
              id={`qtyInput${id}`}
              className='qtyInput input'
              type='number'
              value={qtyVal}
              onChange={handleChange}
            />
            <button onClick={() => setQty()}>Update</button>
          </div>
          {lowStock && (
            <p id={`lowStockNote${id}`} className='lowStockNote'>
              Stock: {itemStock}
            </p>
          )}
        </div>
        <div className='cartItemPrice'>
          <div>
            <h4>${price}</h4>
            <p>/bag</p>
          </div>
          <div>
            <hr />
            <h4>${(price * amt).toFixed(2)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
