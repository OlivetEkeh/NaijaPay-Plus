// src/components/SendMoney.js
import React, { useState } from 'react';
import axios from 'axios';

const SendMoney = () => {
  const [formData, setFormData] = useState({ recipient: '', amount: '', bank: '' });
  const { recipient, amount, bank } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/send-money', formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending money');
    }
  };

  const banks = ["Access Bank", "GTBank", "First Bank", "UBA", "Zenith Bank"]; // Add more banks

  return (
    <div>
      <h1>Transfer</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="recipient" value={recipient} onChange={onChange} placeholder="Recipient" required />
        <input type="number" name="amount" value={amount} onChange={onChange} placeholder="Amount" required />
        <select name="bank" value={bank} onChange={onChange} required>
          <option value="">Select Bank</option>
          {banks.map((bank, index) => (
            <option key={index} value={bank}>{bank}</option>
          ))}
        </select>
        <button type="submit">Send Money</button>
      </form>
    </div>
  );
};

export default SendMoney;
