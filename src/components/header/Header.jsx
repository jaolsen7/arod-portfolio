import React from 'react';
import './header.css';
import CTA from './CTA';

const Header = () => {
  return (
    <header>
      <div className="container container__header">
        <h5>Hello I'm</h5>
        <h1>Angel Rodriguez</h1>
        <h5 className="text-light">Therapist???</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header;