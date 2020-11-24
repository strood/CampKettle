import React from 'react';
import { Link } from 'react-router-dom';

export default function SideMenu() {
  const closeDrawer = () => {
    const drawer = document.querySelector('.drawer-placement-left');
    drawer.hide();
  };
  return (
    <sl-drawer placement='left' class='drawer-placement-left'>
      <div>
        <ul>
          <Link
            to='/'
            onClick={() => {
              closeDrawer();
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to='/coffee'
            onClick={() => {
              closeDrawer();
            }}
          >
            <li>Shop</li>
          </Link>
          <Link
            to='/cart'
            onClick={() => {
              closeDrawer();
            }}
          >
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </sl-drawer>
  );
}
