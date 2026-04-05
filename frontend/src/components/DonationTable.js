import React from 'react';

const tableStyles = {
  container: {
    backgroundColor: 'white',
    borderRadius: '1.5rem', // rounded-3xl
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
    border: '1px solid #f3f4f6', // border-gray-100
    marginTop: '2rem', // mt-8
    overflow: 'hidden' // Ensures contents don't spill over rounded corners
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.5rem', // p-6
    borderBottom: '1px solid #f9fafb', // border-gray-50
    alignItems: 'center'
  },
  title: {
    fontWeight: '900', // font-black
    color: '#1f2937', // gray-800
    margin: 0,
    fontSize: '1rem'
  },
  recordCount: {
    fontSize: '0.75rem', // text-xs
    fontWeight: 'bold',
    color: '#9ca3af', // gray-400
    textTransform: 'uppercase'
  },
  table: {
    width: '100%',
    textAlign: 'left',
    borderCollapse: 'collapse'
  },
  thead: {
    backgroundColor: 'rgba(249, 250, 251, 0.5)', // bg-gray-50/50
    fontSize: '10px', // text-[10px]
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#9ca3af' // gray-400
  },
  th: {
    padding: '1rem 2rem', // px-8 py-4
    letterSpacing: '0.05em'
  },
  tr: {
    borderBottom: '1px solid #f9fafb', // divide-gray-50
    fontSize: '0.875rem', // text-sm
    fontWeight: '500', // font-medium
    color: '#4b5563', // gray-600
    transition: 'background-color 0.2s'
  },
  td: {
    padding: '1rem 2rem' // px-8 py-4
  },
  typeBadge: {
    fontSize: '0.75rem', // text-xs
    fontWeight: 'bold',
    color: '#374151'
  },
  amount: {
    color: '#111827', // gray-900
    fontWeight: '600'
  }
};

const DonationTable = ({ data = [] }) => {
  return (
      <div style={tableStyles.container}>
        <div style={tableStyles.headerRow}>
          <h2 style={tableStyles.title}>All Donations</h2>
          <span style={tableStyles.recordCount}>{data.length} records</span>
        </div>

        <table style={tableStyles.table}>
          <thead style={tableStyles.thead}>
          <tr>
            <th style={tableStyles.th}>Type</th>
            <th style={tableStyles.th}>Amount</th>
            <th style={tableStyles.th}>Created</th>
            <th style={{ ...tableStyles.th, textAlign: 'right' }}>Actions</th>
          </tr>
          </thead>
          <tbody>
          {data.length > 0 ? (
              data.map((item, i) => (
                  <tr
                      key={i}
                      style={tableStyles.tr}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(249, 250, 251, 0.5)'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td style={{ ...tableStyles.td, ...tableStyles.typeBadge }}>{item.type}</td>
                    <td style={{ ...tableStyles.td, ...tableStyles.amount }}>
                      ${Number(item.amount).toLocaleString()}
                    </td>
                    <td style={tableStyles.td}>{item.date}</td>
                    <td style={{ ...tableStyles.td, textAlign: 'right', color: '#d1d5db' }}>—</td>
                  </tr>
              ))
          ) : (
              <tr>
                <td colSpan="4" style={{ ...tableStyles.td, textAlign: 'center', color: '#9ca3af', padding: '3rem' }}>
                  No donations recorded yet.
                </td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
  );
};

export default DonationTable;