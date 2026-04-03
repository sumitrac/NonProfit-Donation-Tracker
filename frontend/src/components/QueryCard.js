const QueryCard = ({ year, setYear, total, onQuery }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4 text-gray-400">
        <span className="text-sm font-bold uppercase">Yearly Total Query</span>
      </div>
      <div className="relative mb-4">
        <select
            value={year} onChange={(e) => setYear(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 font-bold outline-none appearance-none"
        >
          {[2024, 2025, 2026].map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <button onClick={onQuery} className="absolute right-2 top-2 bg-gray-200 px-3 py-1 rounded-lg text-xs font-bold">Query</button>
      </div>
      <div className="bg-green-50/50 p-4 rounded-xl border border-green-100 text-center">
        <p className="text-[10px] text-green-700 font-bold uppercase mb-1">Total for {year}</p>
        <h4 className="text-4xl font-black text-green-900">${total}</h4>
      </div>
    </div>
);
export default QueryCard;