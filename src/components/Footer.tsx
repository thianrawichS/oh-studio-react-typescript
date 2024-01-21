import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="container">
      <div className="position-relative">
        <div
          className="position-absolute bottom-0 start-50 translate-middle p-2"
          style={{ width: '100%' }}
        >
          <div className="row">
            <div className="col text-center" id="signature-left">
              <div className="p-2">Thianrawich 2023</div>
            </div>
            <div className="col-md-6"></div>
            <div className="col text-center" id="signature-right">
              <a
                className="text-decoration-none link-opacity-25-hover p-2"
                href="https://www.linkedin.com/in/thianrawichs/"
              >
                Linkedin
              </a>
              <a
                className="text-decoration-none link-opacity-25-hover p-2"
                href="https://github.com/thianrawichS"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
