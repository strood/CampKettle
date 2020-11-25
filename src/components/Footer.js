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
          <a href='https://www.google.com/search?hl=en&q=2289%20Macleod%20Trail%20NW%2CCalgary%2C%20Alberta'>
            <p>2289 Macleod Trail NW,</p>
            <p>Calgary, Alberta</p>
          </a>
          <p>Store Hours</p>
          <p>Thurs-Sun</p>
          <p>9am - 5pm</p>
        </div>
        <div className='contactDiv'>
          <h4>Wholesale</h4>
          <a href='https://www.google.com/search?hl=en&q=4533%202nd%20Street%20SW%2CCalgary%2C%20Alberta'>
            <p>4533 2nd Street SW,</p>
            <p>Calgary, Alberta</p>
          </a>
          <p>Store Hours</p>
          <p>By Appointment Only</p>
          <p>403-225-0981</p>
        </div>
      </div>
      <div className='socialsDiv'>
        <a href='https://www.twitter.com/_strood'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href='https://www.twitter.com/_strood'>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a href='https://www.twitter.com/_strood'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}
