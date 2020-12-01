import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import HeaderImg from '../components/HeaderImg';
import Footer from '../components/Footer';
import HeaderDiv from '../components/HeaderDiv';
import CheckoutSummary from '../components/CheckoutSummary';
import { useGlobalContext } from '../context';
import { Link, useHistory } from 'react-router-dom';
import {
  faShoppingCart,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Checkout() {
  const { user, setUser } = useGlobalContext();
  const [showDropList, setShowDropList] = useState(false);
  let history = useHistory();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const inputs = Object.values(e.target.elements);
    let userInfo = {};
    inputs.forEach((input) => {
      if (input.className === 'input') {
        userInfo[input.id] = input.value;
      }
      if (input.id === 'saveInfo') {
        userInfo['saveInfo'] = input.checked;
      }
    });
    userInfo['shipping'] = 'TBD';
    if (userInfo.saveInfo) {
      localStorage.setItem('userDetails', JSON.stringify(userInfo));
    } else {
      localStorage.removeItem('userDetails');
    }

    setUser(userInfo);
    history.push('/shipping');
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
                <ul className='trailList trailListInfo'>
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
                      id='firstName'
                      className='input'
                      placeholder='First Name'
                      defaultValue={user.firstName}
                      required
                    />
                    <input
                      type='text'
                      id='lastName'
                      className='input'
                      placeholder='Last Name'
                      defaultValue={user.lastName}
                      required
                    />
                  </div>
                  <input
                    type='email'
                    id='email'
                    className='input'
                    placeholder='Email'
                    defaultValue={user.email}
                    required
                  />
                  <input
                    type='tel'
                    id='phone'
                    className='input'
                    placeholder='Phone (optional)'
                    defaultValue={user.phone}
                  />
                  <hr />
                  <h3>Shipping Address</h3>
                  <input
                    type='text'
                    id='company'
                    className='input'
                    placeholder='Company (optional)'
                    defaultValue={user.company}
                  />
                  <input
                    type='text'
                    className='input'
                    id='addressPrimary'
                    placeholder='Address'
                    defaultValue={user.addressPrimary}
                    required
                  />
                  <input
                    type='text'
                    className='input'
                    id='addressSecondary'
                    placeholder='Apt, suite, ect. (optional)'
                    defaultValue={user.addressSecondary}
                  />
                  <input
                    type='text'
                    id='city'
                    className='input'
                    placeholder='City'
                    defaultValue={user.city}
                    required
                  />
                  <div>
                    <input
                      type='text'
                      id='country'
                      className='input'
                      placeholder='Country/Region'
                      defaultValue={user.country}
                      required
                    />
                    <input
                      type='text'
                      className='input'
                      id='state'
                      placeholder='State/Province'
                      defaultValue={user.state}
                      required
                    />
                    <input
                      type='text'
                      className='input'
                      id='zipcode'
                      placeholder='Zipcode'
                      defaultValue={user.zipcode}
                      required
                    />
                  </div>
                  <div className='saveInfoDiv'>
                    <input
                      type='checkbox'
                      name='saveInfo'
                      id='saveInfo'
                      defaultChecked={user.saveInfo}
                    />

                    <label htmlFor='saveInfo'>
                      Save this info for next time?
                    </label>
                  </div>
                  <div className='checkoutNav'>
                    <Link to='/cart'>
                      <p className='rtnCart'>{'<'}Return to cart</p>
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
