// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    profilePicture: null
  });

  const { fullName, email, password, phone, address, dateOfBirth, profilePicture } = formData;

  const onChange = e => {
    if (e.target.name === 'profilePicture') {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('fullName', fullName);
    data.append('email', email);
    data.append('password', password);
    data.append('phone', phone);
    data.append('address', address);
    data.append('dateOfBirth', dateOfBirth);
    data.append('profilePicture', profilePicture);

    try {
      const response = await axios.post('/api/auth/signup', data);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('An error occurred during signup');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <input type="text" name="fullName" value={fullName} onChange={onChange} placeholder="Full Name" required />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <input type="tel" name="phone" value={phone} onChange={onChange} placeholder="Phone" required />
        <input type="text" name="address" value={address} onChange={onChange} placeholder="Address" required />
        <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={onChange} required />
        <input type="file" name="profilePicture" onChange={onChange} accept="image/*" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
