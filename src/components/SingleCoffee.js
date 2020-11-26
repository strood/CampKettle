import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWater,
  faDove,
  faPaw,
  faMountain,
  faSun,
  faFireAlt,
  faGlobe,
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
}) {
  return (
    <div className='singleCoffeeDiv'>
      <div className='coffeeLeft'>
        <div className='nameDiv'>
          <h1 className='coffeeName'>{name}</h1>
        </div>
        <div className='imgDiv'>
          <FontAwesomeIcon icon={img} />
        </div>
      </div>
      <div className='coffeeMid'>
        <div className='topInfoDiv'>
          <div className='roastDiv'>
            <FontAwesomeIcon icon={faFireAlt} />
            <p>{roast}</p>
          </div>
          <div className='locationDiv'>
            <FontAwesomeIcon icon={faGlobe} />
            <p>{location}</p>
          </div>
        </div>
        <div className='bottomInfoDiv'>
          <div className='aromaDiv'>
            <p>{aroma}</p>
          </div>
          <div className='notesDiv'>
            <p>{notes}</p>
          </div>
        </div>
      </div>
      <div className='coffeeRight'>
        <div className='priceDiv'>
          <h2 className='coffeePrice'>{price}</h2>
        </div>
        <div className='subnote'>
          <p>454g (1lb) Bag</p>
        </div>
        <div className='qtyDiv'>
          <button className='qtyPlusBtn'>+</button>
          <div className='qtyInputDiv'>
            <label htmlFor='qutInput'>Amt:</label>
            <input className='qtyInput' type='text' />
          </div>
          <button className='qtyMinusBtn'>-</button>
        </div>
      </div>
    </div>
  );
}
