import React from 'react';

import Navbar from '../components/Navbar';
import HeaderImg from '../components/HeaderImg';
import Footer from '../components/Footer';
import HeaderDiv from '../components/HeaderDiv';
import CartItem from '../components/CartItem';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  const { cart, total } = useGlobalContext();
  console.log(cart);
  if (cart.length < 1) {
    return (
      <>
        <HeaderImg />
        <main className='main'>
          <HeaderDiv />
          <div className='mainDiv'>
            <Navbar />
            <article className='mainContent'>
              <h1>Your Cart</h1>
              <div className='emptyCartDiv'>
                <p>It appears that your cart is currently empty.</p>
                <Link to='/coffee'>
                  <button className='btn'>Browse Coffees</button>
                </Link>
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <HeaderImg />
        <main className='main'>
          <HeaderDiv />
          <div className='mainDiv'>
            <Navbar />
            <article className='mainContent'>
              <h1>Your Cart</h1>
              <div className='cartDiv'>
                {cart.map((cartItem) => {
                  if (cartItem.amt !== 0) {
                    return <CartItem key={cartItem.id} {...cartItem} />;
                  } else {
                    return null;
                  }
                })}
              </div>

              <hr />
              <hr />

              <div className='checkoutDiv'>
                <div className='checkoutHolder'>
                  <div className='totalDiv'>
                    <p>Total:</p>
                    <hr />
                    <h3>${total.toFixed(2)}</h3>
                  </div>
                  <div className='gtyDiv'>
                    <p>
                      <FontAwesomeIcon icon={faCheck} /> Free shipping worldwide
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCheck} /> Quality guarantee
                    </p>
                  </div>
                </div>
              </div>
              <div className='checkoutBtnDiv'>
                <Link to='/checkout'>
                  <button className='btn'>Checkout</button>
                </Link>
              </div>
              <a className='backToTop' href='#'>
                <FontAwesomeIcon icon={faArrowUp} />
                Back To Top
              </a>
            </article>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
