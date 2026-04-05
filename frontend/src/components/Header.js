import { Plus, Upload } from 'lucide-react';
const Header = ({ onAddDonation }) => (
    <header className="flex justify-between items-center mb-10">
      <div className="flex items-center gap-3">
        <div className="bg-green-800 p-3 rounded-xl text-white font-bold text-xl">🌱</div>
        <div>
          <h1 className="text-xl font-black text-gray-900">Donation Tracker</h1>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">NonProfit Management</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold shadow-sm hover:bg-gray-50"><Upload size={14}/> Import CSV</button>
        <button onClick={onAddDonation} className="flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-green-100 hover:bg-green-900"><Plus size={14}/> Add Donation</button>
      </div>
    </header>
);
export default Header;