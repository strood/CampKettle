import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className='menuIconDiv'>
        <sl-icon
          name='list'
          className='openDrawer'
          onClick={() => {
            const drawer = document.querySelector('.drawer-placement-left');
            drawer.show();
          }}
        >
          Open Drawer
        </sl-icon>
      </div>

      <div className='cartIconDiv'>
        <Link to='/cart'>
          <sl-icon name='cart3'></sl-icon>
        </Link>
      </div>
    </nav>
  );
}
