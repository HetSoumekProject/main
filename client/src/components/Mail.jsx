import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import "./mail.css"
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
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email.');
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
   
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
  );
}

function EmailJSExample() {
  useEffect(() => {
    emailjs.init('rufkVY1vYS2VEYbZL');
  }, []);

  return (
    <div className='body'>
    <div className='container'>
        <div className="brand-logo"></div>
        {/* <div className="brand-title">EMAIL</div> */}
      <ContactForm />
    </div>
    </div>
  );
}

export default EmailJSExample;
