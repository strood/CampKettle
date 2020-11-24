import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav>
      <ul className='navList'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/story'>
          <li>Story</li>
        </Link>
        <Link to='/coffee'>
          <li>Coffee</li>
        </Link>

        <Link to='/cart'>
          <li>Cart</li>
        </Link>
      </ul>
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
        <FontAwesomeIcon
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          icon={faArrowDown}
        />
      </div>
    </nav>
  );
}
