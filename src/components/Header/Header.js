import React from 'react';
import './Header.css'
import cookie from '../../assets/images/cookies.svg'
import jar from '../../assets/images/jar.svg'

function Header() {    
  return (
    <div className="header">      
      <h1>Domowa Spiżarnia</h1>
      <img src={cookie} alt="cookie" />
      <img src={jar} alt="jar"/>      
      <div className="line"></div>
    </div>
  );
}

export default Header;
