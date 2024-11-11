import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, for example:
    // - send the form data to an API
    // - validate the form fields
    console.log('Form data submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='phone'>Phone:</label>
        <input
          type='tel'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type='submit' className='btn-submit'>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
