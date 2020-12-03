import React from 'react';

import Navbar from '../components/Navbar';
import HeaderImg from '../components/HeaderImg';
import Footer from '../components/Footer';
import HeaderDiv from '../components/HeaderDiv';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
      <HeaderImg />
      <main className='main'>
        <HeaderDiv />
        <div className='mainDiv'>
          <Navbar />
          <article className='mainContent'>
            <h1>Uh oh! That page doesnt exist!</h1>
            <Link to='/coffee'>
              <button className='btn'>Back to Coffee!</button>
            </Link>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
