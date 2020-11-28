import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFireAlt,
  faGlobe,
  faPlusSquare,
  faMinusSquare,
} from '@fortawesome/free-solid-svg-icons';

import { useGlobalContext } from '../context';

const getCartTotal = (id, cart) => {
  let item = cart.filter((cartItem) => cartItem.id === id);
  if (item[0]) {
    return item[0].amt;
  } else {
    return 0;
  }
};

export default function SingleCoffee({
  id,
  name,
  price,
  img,
  location,
  roast,
  aroma,
  notes,
  itemStock,
}) {
  const { adjustAmount, toggleModal, cart } = useGlobalContext();
  const [qtyVal, setQtyVal] = useState(0);
  const [lowStock, setLowStock] = useState(false);

  const [cartTotal, setCartTotal] = useState(getCartTotal(id, cart));

  const handleChange = (e) => {
    setQtyVal(e.target.value);
  };

  const toggleBadValue = () => {
    let input = document.querySelector(`#qtyInput${id}`);
    let note = document.querySelector(`#lowStockNote${id}`);

    input.style.border = '1px solid red';
    if (note) {
      note.style.color = 'red';
    }
    setTimeout(() => {
      if (note) {
        note.style.color = '#363b3b';
      }
      input.style.border = '1px solid #4481a6';
    }, 2000);
  };

  const addtoCart = () => {
    if (qtyVal > 0) {
      if (qtyVal > itemStock - cartTotal) {
        setLowStock(true);
        toggleBadValue();
      } else {
        adjustAmount(id, 'add', name, price, img, parseInt(qtyVal));
        setCartTotal(cartTotal + parseInt(qtyVal));
        toggleModal(true, 'added');
        setQtyVal(0);
      }
    }
  };

  const incQtyVal = () => {
    if (qtyVal < itemStock - cartTotal) {
      setQtyVal(qtyVal + 1);
    } else {
      setLowStock(true);
      toggleBadValue();
    }
  };

  const decQtyVal = () => {
    if (qtyVal > 0) {
      setQtyVal(qtyVal - 1);
    } else {
      setQtyVal(0);
    }
  };

  const className = img.prefix + '-' + img.iconName;

  useEffect(() => {
    if (itemStock < 5) {
      setLowStock(true);
    }
  }, []);

  return (
    <div className='singleCoffeeDiv'>
      <div className='coffeeLeft'>
        <div className='nameDiv'>
          <h1 className='coffeeName'>{name}</h1>
          <hr />
        </div>
        <div className='imgHolder'>
          <div className={`imgDiv ${className}`}>
            <FontAwesomeIcon icon={img} />
          </div>
        </div>
      </div>
      <div className='coffeeMid'>
        <div className='topInfoDiv'>
          <div className='roastDiv'>
            <FontAwesomeIcon icon={faFireAlt} />
            <p>{roast} roast</p>
          </div>
          <div className='fillDiv'></div>
          <div className='locationDiv'>
            <FontAwesomeIcon icon={faGlobe} />
            <p>{location}</p>
          </div>
        </div>
        <div className='bottomInfoDiv'>
          <div className='aromaDiv'>
            <div>
              <h3>Aroma:</h3>
            </div>
            <p>{aroma}</p>
          </div>
          <div className='notesDiv'>
            <div>
              <h3>Tasting Notes:</h3>
            </div>
            <p>{notes}</p>
          </div>
        </div>
      </div>
      <div className='coffeeRight'>
        <div className='priceDiv'>
          <h2 className='coffeePrice'>${price}</h2>
          <p className='subnote'>454g Bag</p>
        </div>

        <div className='qtyDiv'>
          <label htmlFor='qtyInput'>Qty:</label>
          <div className='qtyInputDiv'>
            <input
              id={`qtyInput${id}`}
              className={`qtyInput`}
              disabled={itemStock > 0 ? false : true}
              type='number'
              value={qtyVal}
              onChange={handleChange}
            />
            <div className='qtyBtnDiv'>
              <button className='qtyPlusBtn' onClick={() => incQtyVal()}>
                <FontAwesomeIcon icon={faPlusSquare} />
              </button>
              <button className='qtyMinusBtn' onClick={() => decQtyVal()}>
                <FontAwesomeIcon icon={faMinusSquare} />
              </button>
            </div>
          </div>
        </div>
        {lowStock && (
          <p id={`lowStockNote${id}`} className='lowStockNote'>
            Stock: {itemStock}
          </p>
        )}
        {cartTotal > 0 && <p className='lowStockNote'>In Cart:{cartTotal}</p>}

        <button
          className='addCartBtn'
          disabled={itemStock > 0 ? false : true}
          onClick={(e) => addtoCart()}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
