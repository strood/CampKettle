import React from 'react';
import SummaryItem from './SummaryItem';
import { useGlobalContext } from '../context';

export default function CheckoutSummary() {
  const { cart, total, shipping } = useGlobalContext();

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  let shippingTotal = null;
  if (shipping) {
    shippingTotal = shipping + total;
  }

  console.log(shippingTotal);
  if (cart.length > 0) {
    return (
      <div className='checkoutSummaryHolder'>
        {cart.map((cartItem) => {
          return <SummaryItem key={cartItem.id} {...cartItem} />;
        })}
        <hr />
        <form onSubmit={(e) => handleCouponSubmit(e)} className='couponForm'>
          <input
            type='text'
            className='input'
            placeholder='Gift card or discount code'
            required
          />
          <button className='btn' type='submit'>
            Apply
          </button>
        </form>
        <hr />
        <div className='subtotalDiv'>
          <p>Subtotal</p> <h5>${total}</h5>
        </div>
        <div className='shippingDiv'>
          {shippingTotal === false ? (
            <>
              <p>Shipping</p> <h4>$TBD</h4>
            </>
          ) : (
            <>
              <>
                <p>Shipping</p> <h4>${shipping}</h4>
              </>
            </>
          )}
        </div>
        <hr />
        <div className='summaryTotalDiv'>
          {shippingTotal > 0 ? (
            <>
              <p>Total</p> <h4>${shippingTotal}</h4>
            </>
          ) : (
            <>
              <p>Total</p> <h4>${total}</h4>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className='checkoutSummaryHolder'>
        <p>It appears that your cart is currently empty.</p>
        <hr />
        <form onSubmit={(e) => handleCouponSubmit(e)} className='couponForm'>
          <input
            type='text'
            className='input'
            placeholder='Gift card or discount code'
            required
          />
          <button className='btn' type='submit'>
            Apply
          </button>
        </form>
        <hr />
        <div className='subtotalDiv'>
          <p>Subtotal</p> <h5>${total}</h5>
        </div>
        <div className='shippingDiv'>
          {shipping > 0 ? (
            <>
              <p>Total</p> <h4>${shipping}</h4>
            </>
          ) : (
            <>
              <>
                <p>Total</p> <h4>$TBD</h4>
              </>
            </>
          )}
        </div>
        <hr />
        <div className='summaryTotalDiv'>
          {shippingTotal ? (
            <>
              <p>Total</p> <h4>${shippingTotal}</h4>
            </>
          ) : (
            <>
              <p>Total</p> <h4>${total}</h4>
            </>
          )}
        </div>
      </div>
    );
  }
}
