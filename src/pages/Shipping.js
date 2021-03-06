import React, { useState } from 'react';
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

export default function Shipping() {
  const { user, adjustShipping, shipping } = useGlobalContext();
  const [showDropList, setShowDropList] = useState(false);
  let history = useHistory();

  const handleShipUpdate = (e) => {
    if (e.target.id === 'free') {
      adjustShipping(0.0);
    } else {
      adjustShipping(16.42);
    }
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    history.push('/payment');
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
                <ul className='trailList trailListShip'>
                  <Link to='/checkout'>
                    <li className='information'>Information</li>
                  </Link>
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
                <div className='infoReviewDiv'>
                  <div>
                    <p>Contact</p>
                    <h4>{user.email}</h4>
                  </div>

                  <Link to='/checkout'>Change</Link>
                  <hr />
                  <div>
                    <p>Shipping Address</p>
                    <h4>
                      {user.addressPrimary}, {user.addressSecondary}
                    </h4>
                  </div>
                  <Link to='/checkout'>Change</Link>
                </div>
                <hr />
                <form
                  className='shippingInfoForm'
                  onSubmit={(e) => handleShippingSubmit(e)}
                >
                  <h3>Shipping Method</h3>
                  <div className='shippingOptions'>
                    <div className='shipOpt'>
                      <div>
                        {shipping === 0 ? (
                          <input
                            type='radio'
                            id='free'
                            name='shipping'
                            required
                            onChange={handleShipUpdate}
                            defaultChecked
                          />
                        ) : (
                          <input
                            type='radio'
                            id='free'
                            name='shipping'
                            required
                            onChange={handleShipUpdate}
                          />
                        )}
                        <label htmlFor='free'>Standard Shipping</label>
                      </div>
                      <p>Free</p>
                    </div>
                    <div className='shipOpt'>
                      <div>
                        {shipping === 16.42 ? (
                          <input
                            type='radio'
                            id='express'
                            name='shipping'
                            defaultChecked
                            required
                            onChange={handleShipUpdate}
                          />
                        ) : (
                          <input
                            type='radio'
                            id='express'
                            name='shipping'
                            required
                            onChange={handleShipUpdate}
                          />
                        )}
                        <label htmlFor='express'>Express Shipping</label>
                      </div>
                      <p>$16.42</p>
                    </div>
                  </div>
                  <div className='checkoutNav'>
                    <Link to='/checkout'>
                      <p className='rtn'>{'<'}Return</p>
                    </Link>

                    <button type='submit' className='btn'>
                      Continue To Payment
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
