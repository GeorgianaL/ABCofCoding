import React from 'react';
import logo from '../../../public/images/ABCofCoding.png';

const Logo = () => (
  <div className="header__logo">
    <img
      src={logo}
      alt="ABCofCoding"
      style={{
        width: '170px',
        height: '40px'
      }}
    />
  </div>
);

export default Logo;
