import React, { useState } from 'react';
import { DollarSign, RefreshCw, TrendingUp } from 'lucide-react';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import QueryCard from './components/QueryCard';
import DonationTable from './components/DonationTable';

function App() {
  const [year, setYear] = useState(2026);
  const [totalForYear, setTotalForYear] = useState(8400);

  return (
      <div className="min-h-screen bg-gray-50 p-8 md:p-12 font-sans tracking-tight">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <MetricCard title="Total Recorded" value="$5,825" subtext="10 donations" Icon={DollarSign} />
            <MetricCard title="Active Donations" value="8" subtext="currently active" Icon={TrendingUp} />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <MetricCard title="Monthly Recurring" value="$700" subtext="per month" Icon={RefreshCw} />
            <QueryCard year={year} setYear={setYear} total={totalForYear} onQuery={() => console.log("Fetching...")} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <DonationTable data={[]} />
        </div>
      </div>
  );
}

export default App;