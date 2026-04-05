import React from 'react';

const metricStyles = {
  card: {
    backgroundColor: 'white',
    padding: '1.5rem', // p-6
    borderRadius: '1rem', // rounded-2xl
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
    border: '1px solid #f3f4f6', // border-gray-100
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: '0.75rem', // text-xs
    fontWeight: 'bold',
    color: '#9ca3af', // gray-400
    textTransform: 'uppercase',
    letterSpacing: '-0.025em', // tracking-tight
    margin: 0
  },
  value: {
    fontSize: '2.25rem', // text-4xl
    fontWeight: '900', // font-black
    color: '#111827', // gray-900
    margin: '0.25rem 0' // my-1
  },
  subtext: {
    fontSize: '10px', // text-[10px]
    fontWeight: '600', // font-semibold
    color: '#6b7280', // gray-500
    textTransform: 'uppercase',
    margin: 0
  },
  iconWrapper: {
    backgroundColor: '#f9fafb', // gray-50
    padding: '0.625rem', // p-2.5
    borderRadius: '0.75rem', // rounded-xl
    border: '1px solid #f3f4f6', // border-gray-100
    boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)', // shadow-inner
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const MetricCard = ({ title, value, subtext, Icon }) => (
    <div style={metricStyles.card}>
      <div>
        <p style={metricStyles.title}>{title}</p>
        <h2 style={metricStyles.value}>{value}</h2>
        <p style={metricStyles.subtext}>{subtext}</p>
      </div>
      <div style={metricStyles.iconWrapper}>
        <Icon style={{ color: '#9ca3af', width: '20px', height: '20px' }} />
      </div>
    </div>
);

export default MetricCard;