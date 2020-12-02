import React from 'react';

import Navbar from '../components/Navbar';
import HeaderImg from '../components/HeaderImg';
import Footer from '../components/Footer';
import HeaderDiv from '../components/HeaderDiv';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img from '../img/warming-hands-on-campfire-coffee.jpg';

export default function Story() {
  return (
    <>
      <HeaderImg />
      <main className='main'>
        <HeaderDiv />
        <div className='mainDiv'>
          <Navbar />
          <article className='mainContent'>
            <h1>Our Story</h1>
            <div className='storyImgDiv'>
              <img
                src={img}
                alt='Kettle and cup in campsite'
                className='storyImg'
              />
            </div>
            <hr className='topHr' />
            <div className='storydiv'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium deserunt quidem dolor pariatur est autem eaque in
                sunt id? Aut quo ab nulla, corrupti maiores, accusantium ad
                deleniti dolorum ullam qui nobis amet hic et. Repellendus
                debitis animi, rem fuga cum harum excepturi. Sit sequi laborum,
                aliquid magni perferendis possimus?
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt laboriosam ut vero, reiciendis modi quae, ipsam est
                nam, reprehenderit tempore ex deleniti nisi culpa quidem
                consectetur voluptate. Aliquid sapiente molestias animi quaerat
                accusamus nemo nam nesciunt non aspernatur et repellat sunt,
                commodi accusantium fuga quo totam soluta dolor quibusdam
                provident?
              </p>
              <br />
              <p>
                As great as it would be to roast coffee inspired by the
                outdoors, I infact, am not a coffee roaster, nor is Camp &
                Kettle Coffee a real company. This is actually just a website
                created with reactjs and react-router by{' '}
                <a href='https://www.github.com/strood'>Strood</a> You can check
                out some of my other projects by following the link!
              </p>
              <br />
            </div>
            <hr className='bottomHr' />
            <div className='creditDiv'>
              Photos by{' '}
              <a href='https://burst.shopify.com/@shopifypartners?utm_campaign=photo_credit&amp;utm_content=Free+Camping+Kettle+And+Coffee+Cup+Photo+%E2%80%94+High+Res+Pictures&amp;utm_medium=referral&amp;utm_source=credit'>
                Shopify Partners
              </a>{' '}
              from{' '}
              <a href='https://burst.shopify.com/coffee?utm_campaign=photo_credit&amp;utm_content=Free+Camping+Kettle+And+Coffee+Cup+Photo+%E2%80%94+High+Res+Pictures&amp;utm_medium=referral&amp;utm_source=credit'>
                Burst
              </a>
              <br />
            </div>
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
