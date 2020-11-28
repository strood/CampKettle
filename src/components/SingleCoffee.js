import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFireAlt,
  faGlobe,
  faPlusSquare,
  faMinusSquare,
} from '@fortawesome/free-solid-svg-icons';

import { useGlobalContext } from '../context';

export default function SingleCoffee({
  id,
  name,
  price,
  img,
  location,
  roast,
  aroma,
  notes,
  stock,
}) {
  const { toggleAmount, setModalStatus, toggleModal } = useGlobalContext();
  const [qtyVal, setQtyVal] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
    setQtyVal(e.target.value);
  };

  const addtoCart = () => {
    console.log(typeof qtyVal);
    if (qtyVal > 0) {
      toggleAmount(id, 'add', name, price, img, parseInt(qtyVal));
      toggleModal(true, 'added');
      // setModalStatus(true);
    }
    setQtyVal(0);
  };

  const incQtyVal = () => {
    setQtyVal(qtyVal + 1);
  };

  const decQtyVal = () => {
    if (qtyVal > 0) {
      setQtyVal(qtyVal - 1);
    } else {
      setQtyVal(0);
    }
  };

  const className = img.prefix + '-' + img.iconName;

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
              className='qtyInput'
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
        <button className='addCartBtn' onClick={(e) => addtoCart()}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
