import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <>
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Nav />
      <Footer />
    </>
  );
}

export default App;
