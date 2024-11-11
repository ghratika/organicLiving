import React from 'react';
import './contact.css';
import ContactItems from './Contact/ContactItems';
import ContactForm from './Contact/ContactForm';

const Contact = () => {
  return (
    <div>
      <div className='container-color'>
        <div className='section'>
          <h1 className='contact-header'>Get in Touch</h1>
        </div>
      </div>
      <ContactItems />
    </div>
  );
};

export default Contact;
