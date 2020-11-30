import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import HeaderImg from '../components/HeaderImg';
import Footer from '../components/Footer';
import HeaderDiv from '../components/HeaderDiv';
import CheckoutSummary from '../components/CheckoutSummary';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import {
  faShoppingCart,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Checkout() {
  const { cart, total } = useGlobalContext();
  const [showDropList, setShowDropList] = useState(false);

  return (
    <>
      <HeaderImg />
      <main className='main'>
        <HeaderDiv />
        <div className='mainDiv'>
          <Navbar />
          <article className='mainContent'>
            <div className='checkoutContainer'>
              <div className='checkoutInfoDiv'>
                <h1>Checkout</h1>
                <ul className='trailList'>
                  <li className='information'>Informtation</li>
                  <li className='arrow'>{'>'}</li>
                  <li className='shipping'> Shipping</li>
                  <li className='arrow'>{'>'}</li>
                  <li className='payment'> Payment</li>
                </ul>
                <div className='collapseSummary'>
                  <div
                    className='collapseSummaryToggle'
                    onClick={() => setShowDropList(!showDropList)}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>
                      {showDropList ? 'Hide' : 'Show'} order Summary{' '}
                      <FontAwesomeIcon
                        icon={showDropList ? faArrowUp : faArrowDown}
                      />
                    </p>
                  </div>
                  <div
                    className={
                      showDropList
                        ? 'collapseSummaryList'
                        : 'collapseSummaryList shrunk'
                    }
                  >
                    <CheckoutSummary />
                  </div>
                </div>
                <hr />
                <div className='contactInfoDiv'>
                  <h1>Contact Information</h1>
                </div>
                <hr />
                <div className='shippingInfoDiv'>
                  <h1>Shipping Address</h1>
                </div>
                <div>
                  <Link to='/cart'>
                    <p>{'<'}Return to cart</p>
                  </Link>
                  <Link to='/shipping'>
                    <button className='btn'>Continue To Shipping</button>
                  </Link>
                </div>
              </div>
              <div className='checkoutSummaryDiv'>
                <CheckoutSummary />
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
