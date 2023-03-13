import React, { useState } from 'react';

import "./mailer.css"

import axios from 'axios';
const Mailer= () => {
 
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (event) => {
      
      event.preventDefault();
      try {
        await axios.post('http://localhost:3000/api/send_email', { email, message });
        alert('Email sent!');
      } catch (error) {
        console.error(error);
        alert('Error sending email');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">To:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <button type="submit">Send Email</button>
      </form>
    );
    }
  
export default Mailer;
