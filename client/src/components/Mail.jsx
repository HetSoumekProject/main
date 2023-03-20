import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

import './mail.css';

function ContactForm() {
  const [formValues, setFormValues] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    emailjs.sendForm('service_cka6ko7', 'template_pysgxio', event.target)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        swal('Success', 'Email sent successfully!', 'success');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        swal('Error', 'Failed to send email.', 'error');
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
   <div className='bak'>
    <form onSubmit={handleSubmit}>
       <div class="inputsm">
      <label className='labelm'>Name</label>
      <input className='inputm'
        type="text"
        name="from_name"
        value={formValues.from_name}
        onChange={handleChange}
      />

      <label className='labelm'>Email</label>
      <input
      className='inputm'
        type="email"
        name="from_email"
        value={formValues.from_email}
        onChange={handleChange}
      />

      <label className='labelm'>Message</label>
      <input 
      className='inputm'
      type="text"
      name="from_message"
        value={formValues.from_message}
        onChange={handleChange}
      />
      </div>
      <div/>
      <button className="buttonm" type="submit">Send</button>
    </form>
    </div>
  );
}

function EmailJSExample() {
  useEffect(() => {
    emailjs.init('rufkVY1vYS2VEYbZL');
  }, []);

  return (
    <div>
    <div className='body'>
      </div>
      <div>
    <div className='container'>
        <div className="brand-logo"></div>
        {/* <div className="brand-title">EMAIL</div> */}
      <ContactForm />
    </div>
    </div>
    </div>
  );
}

export default EmailJSExample;
