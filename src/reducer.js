export default function reducer(state, action) {
  // Remove item from cart
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }

  //Toggle modal state, set type and id
  if (action.type === 'TOGGLE_MODAL') {
    return {
      ...state,
      modal: action.payload.val,
      modalType: action.payload.type,
      modalId: action.payload.id,
    };
  }

  // Update shipping fees
  if (action.type === 'ADJUST_SHIPPING') {
    return { ...state, shipping: action.payload };
  }

  // Change amount(value) of item(id)
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

  // toggle loading on
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  //Display items in cart and stock once fetched, toggle loading off
  if (action.type === 'DISPLAY_ITEMS') {
    return {
      ...state,
      cart: action.payload.cart,
      stock: action.payload.stock,
      loading: false,
    };
  }

  // Set coupon to amount based on ref
  if (action.type === 'SET_COUPON') {
    let discount = 0.0;
    switch (action.payload) {
      case 'free':
        discount = 1.0;
        break;
      case 'ten':
        discount = 0.1;
        break;
      case 'fifteen':
        discount = 0.15;
        break;
      default:
        break;
    }
    return { ...state, coupon: discount };
  }

  // Get cart total number and price
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
    // include coupon if active
    if (state.coupon) {
      total -= state.coupon * total;
    }

    // include shipping if active
    if (state.shipping !== 'TBD') {
      total += state.shipping;
    }

    //Make float and fix rouding.
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  //Error out if no matches
  throw new Error('no matching action type');
}
