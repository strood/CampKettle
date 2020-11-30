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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

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
                  <li className='information'>Information</li>
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
                <form
                  className='contactInfoForm'
                  onSubmit={(e) => handleContactSubmit(e)}
                >
                  <h3>Contact Information</h3>

                  <div>
                    <input
                      type='text'
                      className='input'
                      placeholder='First Name'
                      required
                    />
                    <input
                      type='text'
                      className='input'
                      placeholder='Last Name'
                      required
                    />
                  </div>
                  <input
                    type='email'
                    className='input'
                    placeholder='Email'
                    required
                  />
                  <input
                    type='tel'
                    className='input'
                    placeholder='Phone (optional)'
                  />
                  <hr />
                  <h3>Address</h3>
                  <input
                    type='text'
                    className='input'
                    placeholder='Company (optional)'
                  />
                  <input
                    type='text'
                    className='input'
                    placeholder='Address'
                    required
                  />
                  <input
                    type='text'
                    className='input'
                    placeholder='Apt, suite, ect. (optional)'
                  />
                  <input
                    type='text'
                    className='input'
                    placeholder='City'
                    required
                  />
                  <div>
                    <input
                      type='text'
                      className='input'
                      placeholder='Country/Region'
                      required
                    />
                    <input
                      type='text'
                      className='input'
                      placeholder='State/Province'
                      required
                    />
                    <input
                      type='text'
                      className='input'
                      placeholder='Zip/Postal Code'
                      required
                    />
                  </div>
                  <div className='saveInfoDiv'>
                    <input type='checkbox' name='saveInfo' id='saveInfo' />
                    <label htmlFor='saveInfo'>
                      Save this info for next time?
                    </label>
                  </div>
                  <div className='checkoutNav'>
                    <Link to='/cart'>
                      <p>{'<'}Return to cart</p>
                    </Link>

                    <button type='submit' className='btn'>
                      Continue To Shipping
                    </button>
                  </div>
                </form>
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
