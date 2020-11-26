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
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

export default function SingleCoffee({
  id,
  name,
  price,
  img,
  location,
  roast,
  aroma,
  notes,
  amount,
  color,
}) {
  const [qtyVal, setQtyVal] = useState('0');
  const handleChange = (e) => {
    setQtyVal(e.target.value);
  };
  const addtoCart = (e) => {
    console.log(e);
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
              type='text'
              placeholder={qtyVal}
              onChange={handleChange}
            />
            <div className='qtyBtnDiv'>
              <button className='qtyPlusBtn'>
                <FontAwesomeIcon icon={faPlusSquare} />
              </button>
              <button className='qtyMinusBtn'>
                <FontAwesomeIcon icon={faMinusSquare} />
              </button>
            </div>
          </div>
        </div>
        <button className='addCartBtn' onClick={(e) => addtoCart(e)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
