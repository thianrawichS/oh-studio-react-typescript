import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const navButton = ['Home', 'Contact'];
  return (
    <>
      <div className="position-fixed top-0 start-50 translate-middle-x mt-5">
        <div
          className="d-flex rounded-pill w-auto p-1"
          style={{
            backgroundColor: '#e8e5e480',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          {navButton.map((btn, id) => (
            <NavLink
              key={id}
              to={`/${btn.toLowerCase()}`}
              className={({ isActive }) =>
                `flex-fill text-center rounded-5 text-black text-decoration-none p-2 ${isActive ? 'bg-white' : ''}`
              }
              style={{ width: '90px' }}
            >
              {btn}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
