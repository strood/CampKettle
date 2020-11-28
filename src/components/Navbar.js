import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../context';

export default function Navbar() {
  const [showDropList, setShowDropList] = useState(false);
  const { amount } = useGlobalContext();
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
            <li>
              Cart
              {amount > 0 && <div className='cartNotifyDot'>{amount}</div>}
            </li>
          </NavLink>
        </ul>
        <div className='menuIconDiv'>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setShowDropList(!showDropList);
            }}
          />
          {amount > 0 && <div className='cartNotifyDot'>{amount}</div>}
        </div>

        <div className='fillerDiv'></div>
      </nav>

      <ul className={showDropList ? 'navDropList' : 'navDropList shrunk'}>
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
          <li>
            Cart
            {amount > 0 && <div className='cartNotifyDot'>{amount}</div>}
          </li>
        </NavLink>
      </ul>
    </>
  );
}
