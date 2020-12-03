import React, { useState } from 'react';
import SummaryItem from './SummaryItem';
import { useGlobalContext } from '../context';
import coupons from '../config';

export default function CheckoutSummary() {
  const { cart, total, shipping, setCoupon, coupon } = useGlobalContext();
  const [invalidCoup, setInvalidCoup] = useState(false);
  const [validCoup, setValidCoup] = useState(false);

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    let valid = false;
    let ref = '';
    coupons.forEach((coupon) => {
      if (coupon.code === e.target.firstChild.value) {
        valid = true;
        ref = coupon.ref;
      }
    });

    //Set coupon if valid
    if (valid) {
      setCoupon(ref);
      setValidCoup(true);
      setTimeout(() => {
        setValidCoup(false);
      }, 2000);
    } else {
      setInvalidCoup(true);
      setTimeout(() => {
        setInvalidCoup(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className='checkoutSummaryHolder'>
        {cart.length > 0 ? (
          cart.map((cartItem) => {
            return <SummaryItem key={cartItem.id} {...cartItem} />;
          })
        ) : (
          <p>It appears that your cart is currently empty.</p>
        )}
      </div>
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
      {invalidCoup && <p id='coupError'>Invalid Coupon</p>}
      {validCoup && <p id='coupSuccess'>Coupon Applied!</p>}
      <hr />
      <div className='subtotalDiv'>
        {shipping >= 0 ? (
          <>
            <p>Subtotal</p> <h5>${(total - shipping).toFixed(2)}</h5>
          </>
        ) : (
          <>
            <p>Subtotal</p> <h5>${total.toFixed(2)}</h5>
          </>
        )}
      </div>
      <div className='shippingDiv'>
        {shipping < 0 ? (
          <>
            <p>Shipping</p> <h5>$TBD</h5>
          </>
        ) : (
          <>
            <>
              <p>Shipping</p> <h5>${shipping}</h5>
            </>
          </>
        )}
      </div>
      {coupon && (
        <div className='couponDiv'>
          <p>Discount</p> <h5>{(coupon * 100).toFixed(2)}%</h5>
        </div>
      )}
      <hr />
      <div className='summaryTotalDiv'>
        <p>Total</p> <h5>${total.toFixed(2)}</h5>
      </div>
    </>
  );
}
