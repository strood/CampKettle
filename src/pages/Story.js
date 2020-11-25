import React from 'react';

import Navbar from '../components/Navbar';
import HeaderImg from '../components/HeaderImg';
import Footer from '../components/Footer';

export default function Story() {
  return (
    <>
      <HeaderImg />
      <main className='story'>
        <div className='headerDiv'>
          <div>
            <h1 className='imgHeader'>Camp & Kettle Coffee</h1>
            <h2 className='imgHeader'>Smooth Drinking, Wild Flavor.</h2>
          </div>
        </div>
        <div className='storyDiv'>
          <Navbar />
          <article className='storyContent'>
            <h1>Our Focus</h1>
            <p>
              We are a Calgary based specialty coffee roaster, with a mission to
              provide the finest and freshest quality coffee. Inspired by a fond
              love of coffee, and the great outdoors, we roast to bring out a
              distinct, full-bodied profile with every cup. Anytime you find
              yourself out in natures, one of our six feature beans will make
              you feel right at home.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
