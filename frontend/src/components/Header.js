import React from 'react';
import { Plus, Upload } from 'lucide-react';

const headerStyles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2.5rem', // mb-10
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem', // gap-3
  },
  iconBox: {
    backgroundColor: '#065f46', // green-800
    padding: '0.75rem', // p-3
    borderRadius: '0.75rem', // rounded-xl
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.25rem', // text-xl
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1
  },
  title: {
    fontSize: '1.25rem', // text-xl
    fontWeight: '900', // font-black
    color: '#111827', // gray-900
    margin: 0,
    lineHeight: 1.2
  },
  subtitle: {
    fontSize: '10px', // text-[10px]
    fontWeight: 'bold',
    color: '#9ca3af', // gray-400
    textTransform: 'uppercase',
    letterSpacing: '-0.05em', // tracking-tighter
    margin: 0
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.75rem', // gap-3
  },
  importBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem', // gap-2
    backgroundColor: 'white',
    border: '1px solid #e5e7eb', // border-gray-200
    padding: '0.5rem 1rem', // px-4 py-2
    borderRadius: '0.75rem', // rounded-xl
    fontSize: '0.75rem', // text-xs
    fontWeight: 'bold',
    color: '#374151',
    cursor: 'pointer',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  },
  addBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem', // gap-2
    backgroundColor: '#065f46', // green-800
    color: 'white',
    padding: '0.5rem 1rem', // px-4 py-2
    borderRadius: '0.75rem', // rounded-xl
    fontSize: '0.75rem', // text-xs
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 15px -3px rgba(6, 95, 70, 0.1)', // shadow-green-100/shadow-lg
  }
};

const Header = ({ onAddDonation }) => {
  return (
      <header style={headerStyles.header}>
        <div style={headerStyles.logoSection}>
          <div style={headerStyles.iconBox}>🌱</div>
          <div>
            <h1 style={headerStyles.title}>Donation Tracker</h1>
            <p style={headerStyles.subtitle}>NonProfit Management</p>
          </div>
        </div>

        <div style={headerStyles.buttonGroup}>
          <button
              style={headerStyles.importBtn}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            <Upload size={14}/> Import CSV
          </button>

          <button
              onClick={onAddDonation}
              style={headerStyles.addBtn}
              onMouseOver={(e) => e.target.style.backgroundColor = '#064e3b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#065f46'}
          >
            <Plus size={14}/> Add Donation
          </button>
        </div>
      </header>
  );
};

export default Header;