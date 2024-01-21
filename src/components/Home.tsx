import React from 'react';
import ImageList from './ImageList';
import BottomNav from './BottomNav';
import ContactForm from './ContactForm';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <div className="mt-5 mb-5 pt-5 pb-5 ">
        <div className="container">
          <div className="mb-5 pt-5 text-center animate__animated animate__fadeInUp animate__slow">
            <div className="d-flex flex-column">
              <h1 id="hero">
                A brand and product designer working with clients globally
              </h1>
              <div id="sub-hero">
                <div className="d-flex justify-content-center">
                  <div className="p-2">Expertise</div>
                  <div
                    className="p-2 me-2 rounded-pill"
                    style={{ backgroundColor: '#e8e5e480' }}
                  >
                    Branding
                  </div>
                  <div
                    className="p-2 me-2 rounded-pill"
                    style={{ backgroundColor: '#e8e5e480' }}
                  >
                    Product
                  </div>
                  <div
                    className="p-2 me-2 rounded-pill"
                    style={{ backgroundColor: '#e8e5e480' }}
                  >
                    Design Systems
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 pt-5">
            <ImageList />
          </div>

          <div className="mb-5 pt-5">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeIn animate__slower">
        <BottomNav name="Shop" />
      </div>
    </>
  );
};

export default Home;
