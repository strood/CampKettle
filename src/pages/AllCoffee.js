import React from 'react';

import Navbar from '../components/Navbar';
import HeaderImg from '../components/HeaderImg';
import Footer from '../components/Footer';
import HeaderDiv from '../components/HeaderDiv';
import SingleCoffee from '../components/SingleCoffee';

import { useGlobalContext } from '../context';

export default function AllCoffee() {
  const { coffeeStock } = useGlobalContext();
  console.log(coffeeStock);
  return (
    <>
      <HeaderImg />
      <main className='main'>
        <HeaderDiv />
        <div className='mainDiv'>
          <Navbar />
          <article className='mainContent'>
            <h1>Our Coffee</h1>
            {coffeeStock.map((coffee) => {
              return <SingleCoffee key={coffee.id} {...coffee} />;
            })}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
