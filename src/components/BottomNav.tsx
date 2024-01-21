import React from 'react';

const BottomNav = (props: { name: string }) => {
  return (
    <div className="position-fixed bottom-0 start-50 translate-middle-x mb-5">
      <div className="d-flex rounded-pill p-2 bg-black">
        <a
          href="#"
          className="text-decoration-none text-white text-center"
          style={{ width: '90px' }}
        >
          {props.name}
        </a>
      </div>
    </div>
  );
};

export default BottomNav;
