// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <video autoPlay loop muted className="background-video">
        <source src="/NaijaPayPlus.mp4" type="video/mp4" />
      </video>
      <div className="home-container">
        <h1>Welcome to NaijaPay Plus</h1>
        <p>Your trusted platform for sending money and paying bills.</p>
        <div className="button-group">
          <Link to="/Signup" className="btn">Signup</Link>
          <Link to="/Login" className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
