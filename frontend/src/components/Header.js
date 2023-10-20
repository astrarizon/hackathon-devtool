// src/components/Header.js

import React from 'react';
import '../styles/Header.css';  
import logo from '../assets/logo.png';  

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <img src={logo} alt="Website Logo" className="header-logo" />
        <div className="header-title">
          <div>Pulsar Dev</div>
          <div>Toolbox</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
