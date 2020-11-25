import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [showDropList, setShowDropList] = useState(false);
  return (
    <>
      <nav>
        <ul className='navList'>
          <NavLink exact to='/' activeClassName='selected'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/story' activeClassName='selected'>
            <li>Story</li>
          </NavLink>
          <NavLink to='/coffee' activeClassName='selected'>
            <li>Coffee</li>
          </NavLink>

          <NavLink to='/cart' activeClassName='selected'>
            <li>Cart</li>
          </NavLink>
        </ul>
        <div className='menuIconDiv'>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setShowDropList(!showDropList);
            }}
          />
        </div>

        <div className='fillerDiv'></div>
      </nav>
      {/* {showDropList && ( */}
      <ul className={showDropList ? 'navDropList' : 'navDropList hidden'}>
        <NavLink exact to='/' activeClassName='selected'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/story' activeClassName='selected'>
          <li>Story</li>
        </NavLink>
        <NavLink to='/coffee' activeClassName='selected'>
          <li>Coffee</li>
        </NavLink>
        <NavLink to='/cart' activeClassName='selected'>
          <li>Cart</li>
        </NavLink>
      </ul>
      {/* )} */}
    </>
  );
}
