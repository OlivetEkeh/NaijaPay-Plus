// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to NaijaPay Plus</h1>
      <p>Your trusted platform for sending money and paying bills.</p>
      <div>
        <Link to="/signup">Signup</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/forgot-password">Forgot Password</Link>
      </div>
    </div>
  );
};

export default Home;
