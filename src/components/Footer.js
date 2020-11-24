import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div className='footerTextDiv'>
        <div className='contactDiv'>
          <h4>Retail</h4>
          <a href='#'>
            <p>7711 Macleod Trail SE,</p>
            <p>Calgary, Alberta</p>
          </a>
          <p>Store Hours</p>
          <p>Thurs-Sun</p>
          <p>9am - 5pm</p>
        </div>
        <div className='contactDiv'>
          <h4>Wholesale</h4>
          <a href='#'>
            <p>4806 1st street SW,</p>
            <p>Calgary, Alberta</p>
          </a>
          <p>Store Hours</p>
          <p>By Appointment Only</p>
          <p>403-225-0981</p>
        </div>
      </div>
      <div className='socialsDiv'>
        <a href='www.twitter.com/_strood'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href='www.twitter.com/_strood'>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a href='www.twitter.com/_strood'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}
