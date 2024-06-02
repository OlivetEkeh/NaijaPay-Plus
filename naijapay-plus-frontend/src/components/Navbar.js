import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfileClick = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfilePicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <nav className="navbar">
      <h1>NaijaPay Plus</h1>
      <ul className="navbar-left">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/send-money">Send Money</Link></li>
        <li><Link to="/pay-bills">Pay Bills</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-right">
        {user ? (
          <>
            <span className="welcome-text">Welcome, {user.name}</span>
            <div className="profile-container">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="user-icon profile-picture"
                  onClick={handleProfileClick}
                />
              ) : (
                <FaUserCircle className="user-icon" onClick={handleProfileClick} />
              )}
              {showProfileOptions && (
                <div className="profile-options">
                  <label htmlFor="profile-upload" className="upload-label">
                    Change Profile Picture
                    <input id="profile-upload" type="file" onChange={handleFileChange} />
                  </label>
                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <FaUserCircle className="user-icon" onClick={handleProfileClick} />
            {showProfileOptions && (
              <div className="profile-options">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
