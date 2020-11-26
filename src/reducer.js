import React from 'react';

export default function reducer(state, action) {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  throw new Error('no matching action type');
}
