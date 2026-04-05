import React, { useState } from 'react';

export const DonationModalStyles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 },
  modal: { background: 'white', borderRadius: '16px', padding: '24px', width: '420px' },
  input: { width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', marginBottom: '12px', boxSizing: 'border-box' },
  saveBtn: { background: '#166534', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' },
  cancelBtn: { background: 'white', border: '1px solid #ddd', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', marginRight: '8px' },
};

const AddDonationModal = ({ onClose, onSave }) => {
  // Stores form input values
  const [type, setType] = useState('ONE_TIME');
  const [amount, setAmount] = useState('');
  const [creationDate, setCreationDate] = useState('');

  // Called when user clicks Save
  const handleSubmit = async () => {
    // Build donation object to send to backend
    const donation = {
      type,
      amount: parseFloat(amount),
      creationDate: `${creationDate}T00:00:00`
    };

    // POST to backend
    await fetch('http://localhost:8080/api/donations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donation)
    });

    onSave(); // Refresh donations list
    onClose(); // Close modal
  };

  return (
      <div style={DonationModalStyles.overlay}>
        <div style={DonationModalStyles.modal}>
            <h2>Add Donation</h2>
            <select style={DonationModalStyles.input} value={type} onChange={e => setType(e.target.value)}>
              <option value="ONE_TIME">One Time</option>
              <option value="MONTHLY">Monthly</option>
            </select>
            <input style={DonationModalStyles.input} type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
            <input style={DonationModalStyles.input} type="date" value={creationDate} onChange={e => setCreationDate(e.target.value)} />
            <div>
              <button style={DonationModalStyles.cancelBtn} onClick={onClose}>Cancel</button>
              <button style={DonationModalStyles.saveBtn} onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
    );
};
export default AddDonationModal;