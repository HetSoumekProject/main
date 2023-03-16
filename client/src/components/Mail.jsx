import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

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
      <label htmlFor="from_name">Name</label>
      <input
        type="text"
        name="from_name"
        value={formValues.from_name}
        onChange={handleChange}
      />

      <label htmlFor="from_email">Email</label>
      <input
        type="email"
        name="from_email"
        value={formValues.from_email}
        onChange={handleChange}
      />

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        value={formValues.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Send</button>
    </form>
  );
}

function EmailJSExample() {
  useEffect(() => {
    emailjs.init('rufkVY1vYS2VEYbZL');
  }, []);

  return (
    <div>
      <ContactForm />
    </div>
  );
}

export default EmailJSExample;
