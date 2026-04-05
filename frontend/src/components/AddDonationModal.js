import React, { useState } from 'react';
import { X } from 'lucide-react';

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
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999}}>
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-black text-gray-900">Add Donation</h2>
            <button onClick={onClose}><X size={18} className="text-gray-400" /></button>
          </div>

          {/* Donation Type */}
          <div className="mb-4">
            <label className="text-xs font-bold text-gray-400 uppercase">Type</label>
            <select value={type} onChange={e => setType(e.target.value)}
                    className="w-full mt-1 bg-gray-50 border border-gray-100 rounded-xl p-3 font-bold outline-none">
              <option value="ONE_TIME">One Time</option>
              <option value="MONTHLY">Monthly</option>
            </select>
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label className="text-xs font-bold text-gray-400 uppercase">Amount</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)}
                   placeholder="0.00"
                   className="w-full mt-1 bg-gray-50 border border-gray-100 rounded-xl p-3 font-bold outline-none" />
          </div>

          {/* Date */}
          <div className="mb-6">
            <label className="text-xs font-bold text-gray-400 uppercase">Date</label>
            <input type="date" value={creationDate} onChange={e => setCreationDate(e.target.value)}
                   className="w-full mt-1 bg-gray-50 border border-gray-100 rounded-xl p-3 font-bold outline-none" />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button onClick={onClose}
                    className="flex-1 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-xs font-bold">
              Cancel
            </button>
            <button onClick={handleSubmit}
                    className="flex-1 bg-green-800 text-white px-4 py-2 rounded-xl text-xs font-bold">
              Save Donation
            </button>
          </div>
        </div>
      </div>
  );
};

export default AddDonationModal;