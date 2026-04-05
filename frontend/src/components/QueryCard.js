import React from 'react';
import { Search } from 'lucide-react';

const queryStyles = {
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    border: '1px solid #f3f4f6',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '-0.025em',
    margin: 0
  },
  inputGroup: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  },
  input: {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#111827',
    width: '80px',
    outline: 'none'
  },
  button: {
    backgroundColor: '#065f46', // Matches your Header green
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    padding: '0.5rem 0.75rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s'
  },
  resultArea: {
    borderTop: '1px solid #f9fafb',
    paddingTop: '0.75rem',
    marginTop: '0.25rem'
  },
  totalValue: {
    fontSize: '1.5rem',
    fontWeight: '900',
    color: '#065f46', // Green to emphasize the result
    margin: '0.25rem 0'
  },
  subtext: {
    fontSize: '10px',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase'
  }
};

const QueryCard = ({ year, setYear, total, onQuery }) => {
  return (
      <div style={queryStyles.card}>
        <div style={queryStyles.header}>
          <p style={queryStyles.title}>Budget Query by Year</p>
          <div style={queryStyles.inputGroup}>
            <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                style={queryStyles.input}
            />
            <button
                onClick={onQuery}
                style={queryStyles.button}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#064e3b'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#065f46'}
            >
              <Search size={16} />
            </button>
          </div>
        </div>

        <div style={queryStyles.resultArea}>
          <p style={queryStyles.subtext}>Calculated Total for {year}</p>
          <h2 style={queryStyles.totalValue}>
            ${Number(total).toLocaleString()}
          </h2>
        </div>
      </div>
  );
};

export default QueryCard;