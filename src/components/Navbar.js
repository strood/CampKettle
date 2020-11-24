import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav>
      <div className='menuIconDiv'>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            const drawer = document.querySelector('.drawer-placement-left');
            drawer.show();
          }}
        />
      </div>

      <div className='cartIconDiv'>
        <Link to='/cart'>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </nav>
  );
}
