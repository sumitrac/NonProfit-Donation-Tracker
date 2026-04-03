const MetricCard = ({ title, value, subtext, Icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">{title}</p>
        <h2 className="text-4xl font-black text-gray-900 my-1">{value}</h2>
        <p className="text-[10px] font-semibold text-gray-500 uppercase">{subtext}</p>
      </div>
      <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 shadow-inner">
        <Icon className="text-gray-400 w-5 h-5" />
      </div>
    </div>
);
export default MetricCard;