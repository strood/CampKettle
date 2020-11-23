import React from 'react';

export default function SideMenu() {
  return (
    <sl-drawer label='Drawer' placement='left' class='drawer-placement-left'>
      Hello from the elft menu.
      <sl-button
        slot='footer'
        type='primary'
        onClick={() => {
          const drawer = document.querySelector('.drawer-placement-left');
          drawer.hide();
        }}
      >
        Close
      </sl-button>
    </sl-drawer>
  );
}
