import React from 'react';

import Navbar from '../components/Navbar';
import HeaderImg from '../components/HeaderImg';
import Footer from '../components/Footer';
import HeaderDiv from '../components/HeaderDiv';

export default function Cart() {
  return (
    <>
      <HeaderImg />
      <main className='main'>
        <HeaderDiv />
        <div className='mainDiv'>
          <Navbar />
          <article className='mainContent'>
            <h1>Your Cart</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolor fuga sequi, maiores deserunt voluptatem totam possimus eum
              iure quas molestias, porro quisquam nesciunt aut qui nemo harum
              atque alias cupiditate perspiciatis, ad maxime dolores enim? Hic
              rerum cum, dolorum ipsum nisi neque repellendus minima facere
              error nostrum, pariatur iure!
            </p>
            <br />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
