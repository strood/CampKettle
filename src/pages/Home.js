import React from 'react';

import Navbar from '../components/Navbar';
import BackgroundImg from '../components/BackgroundImg';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <BackgroundImg />
      <main className='home'>
        <div className='headerDiv'>
          <div>
            <h1 className='imgHeader'>Camp & Kettle Coffee</h1>
            <h2 className='imgHeader'>Smooth Drinking, Wild Flavor.</h2>
          </div>
        </div>
        <div className='homeDiv'>
          <Navbar />
          <article className='homeContent'>
            <h1>Our Focus</h1>
            <p>
              We are a Calgary based specialty coffee roaster, with a mission to
              provide the finest and freshest quality coffee. Inspired by
              traditional northern Italian coffee roasting methods, we roast to
              insure a full-bodied profile with every cup. Anytime there is a
              new fantastic crop, we feature them along side our six staple
              regional coffees.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
