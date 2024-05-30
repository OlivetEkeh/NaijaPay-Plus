import React, { useState } from 'react';
import axios from 'axios';

const PayBills = () => {
  const [formData, setFormData] = useState({ biller: '', amount: '', billType: '' });
  const { biller, amount, billType } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/pay-bills', formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('An error occurred while paying the bill');
    }
  };

  const billTypes = ["PHCN", "Airtime Recharge", "DSTV", "Tax", "Water Bill"]; // Add more bill types

  return (
    <div>
      <h1>Pay Bills</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="biller" value={biller} onChange={onChange} placeholder="Biller" required />
        <input type="number" name="amount" value={amount} onChange={onChange} placeholder="Amount" required />
        <select name="billType" value={billType} onChange={onChange} required>
          <option value="">Select Bill Type</option>
          {billTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
        <button type="submit">Pay Bill</button>
      </form>
    </div>
  );
};

export default PayBills;
