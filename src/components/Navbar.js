import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [showDropList, setShowDropList] = useState(false);
  return (
    <>
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
              setShowDropList(!showDropList);
            }}
          />
        </div>

        <div className='cartIconDiv'>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </nav>
      {/* {showDropList && ( */}
      <ul className={showDropList ? 'navDropList' : 'navDropList hidden'}>
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
      {/* )} */}
    </>
  );
}
