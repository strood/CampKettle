import React from 'react';
import SummaryItem from './SummaryItem';
import { useGlobalContext } from '../context';

export default function CheckoutSummary() {
  const { cart, total, user } = useGlobalContext();

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

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
          <p>Shipping</p> <p>${user.shipping}</p>
        </div>
        <hr />
        <div className='summaryTotalDiv'>
          <p>Total</p> <h4>${parseInt(total + user.shipping).toFixed(2)}</h4>
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
          <p>Shipping</p> <p>${user.shipping}</p>
        </div>
        <hr />
        <div className='summaryTotalDiv'>
          <p>Total</p> <h4>${parseInt(total + user.shipping).toFixed(2)}</h4>
        </div>
      </div>
    );
  }
}
