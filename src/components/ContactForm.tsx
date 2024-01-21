import React from 'react';

const ContactForm = () => {
  return (
    <div className="d-flex flex-column align-items-center text-center animate__animated animate__fadeInUp animate__slow">
      <div className="h1">{`Let's work together.`}</div>
      <div className="h1">
        <a
          href="#"
          className="link-secondary link-opacity-25-hover text-decoration-none"
        >
          Get in touch.
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
