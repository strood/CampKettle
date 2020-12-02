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
import {
  faCcAmex,
  faCcMastercard,
  faBitcoin,
  faCcVisa,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons';

export default function Payment() {
  const { user, shipping } = useGlobalContext();
  const [showDropList, setShowDropList] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentError(true);
    setTimeout(() => {
      setPaymentError(false);
    }, 2000);
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
                <ul className='trailList trailListPay'>
                  <Link to='/checkout'>
                    <li className='information'>Information</li>
                  </Link>
                  <li className='arrow'>{'>'}</li>
                  <Link to='/shipping'>
                    <li className='shipping'>Shipping</li>
                  </Link>
                  <li className='arrow'>{'>'}</li>
                  <li className='payment'>Payment</li>
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
                  <hr />
                  <div>
                    <p>Shipping Method</p>

                    {shipping === 'TBD' ? (
                      <h4>None Chosen</h4>
                    ) : (
                      <>
                        {shipping === 0 && <h4>Standard Shipping</h4>}
                        {shipping === 16.42 && <h4>Express Shipping</h4>}
                      </>
                    )}
                  </div>
                  <Link to='/shipping'>Change</Link>
                </div>
                <hr />
                <form
                  className='paymentInfoForm'
                  onSubmit={(e) => handlePaymentSubmit(e)}
                >
                  <h3>Payment Method</h3>
                  <div className='paymentOptions'>
                    <div className='payOpt'>
                      <div>
                        <input
                          type='radio'
                          id='bitcoin'
                          name='payment'
                          required
                        />
                        <label htmlFor='bitcoin'>Bitcoin</label>
                      </div>
                      <div className='pmtIconDiv'>
                        <FontAwesomeIcon icon={faBitcoin} />
                      </div>
                    </div>
                    <div className='payOpt'>
                      <div>
                        <input
                          type='radio'
                          id='credit'
                          name='payment'
                          required
                        />
                        <label htmlFor='credit'>Credit/Debit</label>
                      </div>
                      <div className='pmtIconDiv'>
                        <FontAwesomeIcon icon={faCcVisa} />
                        <FontAwesomeIcon icon={faCcMastercard} />
                        <FontAwesomeIcon icon={faCcAmex} />
                      </div>
                    </div>
                    <div className='payOpt'>
                      <div>
                        <input
                          type='radio'
                          id='paypal'
                          name='payment'
                          required
                        />

                        <label htmlFor='paypal'>Paypal</label>
                      </div>
                      <div className='pmtIconDiv'>
                        <FontAwesomeIcon icon={faPaypal} />
                      </div>
                    </div>
                  </div>
                  {paymentError && (
                    <p id='pmtErrMsg'>
                      Sorry, no product actually exists, so we can't let you pay
                      for it!
                    </p>
                  )}
                  <div className='checkoutNav'>
                    <Link to='/shipping'>
                      <p className='rtnCart'>{'<'}Return</p>
                    </Link>
                    <button type='submit' className='btn'>
                      Proceed With Payment
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
