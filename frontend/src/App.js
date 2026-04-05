import React, {useEffect, useState} from 'react';
import { DollarSign, RefreshCw, TrendingUp } from 'lucide-react';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import QueryCard from './components/QueryCard';
import DonationTable from './components/DonationTable';
import AddDonationModal from "./components/AddDonationModal";

const API_URL = 'http://localhost:8080/api';

// Inline Style Object for the Main Layout
const appStyles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb', // Light gray background
    padding: '2rem 1rem',
    fontFamily: '"Inter", -apple-system, sans-serif',
    color: '#111827'
  },
  innerWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  dashboardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  tableSection: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    padding: '1rem',
    border: '1px solid #e5e7eb'
  }
};

function App() {
  const [year, setYear] = useState(2026);
  const [totalForYear, setTotalForYear] = useState(0);
  const [donations, setDonations] = useState([])
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    const response = await fetch(`${API_URL}/donations`);
    const data = await response.json();
    setDonations(data);
  };

  const fetchTotalForYear = async () => {
    const response = await fetch(`${API_URL}/donations/total?year=${year}`);
    const data = await response.json();
    setTotalForYear(data);
  };

  const totalRecorded = donations.reduce((sum, d) => sum + d.amount, 0);
  const monthlyDonations = donations.filter(d => d.type === 'MONTHLY');
  const monthlyTotal = monthlyDonations.reduce((sum, d) => sum + d.amount, 0);

  return (
      <div style={appStyles.container}>
        <div style={appStyles.innerWrapper}>

          {/* Header Component */}
          <Header onAddDonation={() => setShowModal(true)} />

          {/* Dashboard Metrics Grid */}
          <div style={appStyles.dashboardGrid}>

            {/* Left Column */}
            <div style={appStyles.column}>
              <MetricCard
                  title="Total Budget Impact"
                  value={`$${totalRecorded.toLocaleString()}`}
                  subtext={`${donations.length} total entries`}
                  Icon={DollarSign}
              />
              <MetricCard
                  title="Active Tasks"
                  value={donations.length}
                  subtext="Updated live from SQL"
                  Icon={TrendingUp}
              />
            </div>

            {/* Right Column */}
            <div style={appStyles.column}>
              <MetricCard
                  title="Monthly Burn Rate"
                  value={`$${monthlyTotal.toLocaleString()}`}
                  subtext="Recurring monthly impact"
                  Icon={RefreshCw}
              />
              <QueryCard
                  year={year}
                  setYear={setYear}
                  total={totalForYear}
                  onQuery={fetchTotalForYear}
              />
            </div>
          </div>

          {/* Main Data Table */}
          <div style={appStyles.tableSection}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', paddingLeft: '0.5rem' }}>
              Resource Log
            </h2>
            <DonationTable data={donations.map(d => ({
              type: d.type,
              amount: d.amount,
              date: new Date(d.creationDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })
            }))} />
          </div>

        </div>

        {/* Conditional Rendering of Modal */}
        {showModal && (
            <AddDonationModal
                onClose={() => setShowModal(false)}
                onSave={fetchDonations}
            />
        )}
      </div>
  );
}

export default App;