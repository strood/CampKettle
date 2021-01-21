import React from 'react';

import Navbar from '../components/Navbar';
import HeaderImg from '../components/HeaderImg';
import Footer from '../components/Footer';
import HeaderDiv from '../components/HeaderDiv';
import SingleCoffee from '../components/SingleCoffee';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useGlobalContext } from '../context';

export default function AllCoffee() {
  const { stock } = useGlobalContext();

  return (
    <>
      <HeaderImg />
      <main className='main'>
        <HeaderDiv />
        <div className='mainDiv'>
          <Navbar />
          <article className='mainContent'>
            <h1>Our Coffee</h1>
            {stock.map((coffee) => {
              console.log(coffee);
              return <SingleCoffee key={coffee._id} {...coffee} />;
            })}
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
