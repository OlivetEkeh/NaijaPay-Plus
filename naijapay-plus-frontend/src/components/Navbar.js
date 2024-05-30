// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/send-money">Send Money</Link></li>
        <li><Link to="/pay-bills">Pay Bills</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;