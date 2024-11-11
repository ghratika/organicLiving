import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';
import '../contact.css';
import leaf1 from '../../image/leaf-2.png';

const ContactItems = () => {
  return (
    <div className='container'>
      <div className='contact-img'>
        <img src={leaf1} alt='leaf-2' />
      </div>
      <div className='section'>
        <div className='contact-info-item-container'>
          <div className='contact-info-item'>
            <div className='contact-info-item-icon'>
              <FaPhone />
            </div>
            <div className='contact-info-item-text'>
              <h4>+918 456 7890</h4>
              <h4>+917 456 7890</h4>
            </div>
          </div>
          <div className='contact-info-item'>
            <div className='contact-info-item-icon'>
              <LuMail />
            </div>
            <div className='contact-info-item-text'>
              <h4>info@organicliving.com</h4>
              <h4>support@organicliving.com</h4>
            </div>
          </div>
          <div className='contact-info-item'>
            <div className='contact-info-item-icon'>
              <FaLocationDot />
            </div>
            <div className='contact-info-item-text'>
              <h4>Delhi,</h4>
              <h4>India</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactItems;
