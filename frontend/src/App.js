import React, {useEffect, useState} from 'react';
import { DollarSign, RefreshCw, TrendingUp } from 'lucide-react';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import QueryCard from './components/QueryCard';
import DonationTable from './components/DonationTable';

const API_URL = 'http://localhost:8080/api';

function App() {
  const [year, setYear] = useState(2026);
  const [totalForYear, setTotalForYear] = useState(0);
  const [donations, setDonations] = useState([])

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
      <div className="min-h-screen bg-gray-50 p-8 md:p-12 font-sans tracking-tight">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <MetricCard title="Total Recorded" value={`$${totalRecorded}`} subtext={`${donations.length} donations`} Icon={DollarSign} />
            <MetricCard title="Active Donations" value={donations.length} subtext="currently active" Icon={TrendingUp} />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <MetricCard title="Monthly Recurring" value={`$${monthlyTotal}`} subtext="per month" Icon={RefreshCw} />
            <QueryCard year={year} setYear={setYear} total={totalForYear} onQuery={fetchTotalForYear} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <DonationTable data={donations.map(d => ({
            type: d.type,
            amount: d.amount,
            date: new Date(d.creationDate).toLocaleDateString(
                'en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })
          }))} />
        </div>
      </div>
  );
}

export default App;