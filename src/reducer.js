export default function reducer(state, action) {
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === 'TOGGLE_MODAL') {
    return {
      ...state,
      modal: action.payload.val,
      modalType: action.payload.type,
      modalId: action.payload.id,
    };
  }

  if (action.type === 'ADJUST_SHIPPING') {
    return { ...state, shipping: action.payload };
  }

  if (action.type === 'ADJUST_AMOUNT') {
    let isInCart = false;

    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          isInCart = true;

          if (action.payload.action === 'set') {
            return { ...cartItem, amt: parseInt(action.payload.value) };
          }
          if (action.payload.action === 'add') {
            let newVal =
              parseInt(action.payload.value) + parseInt(cartItem.amt);

            return { ...cartItem, amt: newVal };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amt !== 0);

    //If not present in cart
    if (!isInCart) {
      const { id, name, price, img, value } = action.payload;
      tempCart = [...tempCart, { id, name, price, img, amt: value }];
    }

    return { ...state, cart: tempCart };
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return {
      ...state,
      cart: action.payload.cart,
      stock: action.payload.stock,
      loading: false,
    };
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amt } = cartItem;
        cartTotal.amount = parseInt(cartTotal.amount) + parseInt(amt);
        const itemTotal = price * amt;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  throw new Error('no matching action type');
}
