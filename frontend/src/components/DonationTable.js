const DonationTable = ({ data = [] }) => (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 mt-8">
      <div className="flex justify-between p-6 border-b border-gray-50">
        <h2 className="font-black text-gray-800">All Donations</h2>
        <span className="text-xs font-bold text-gray-400">{data.length} records</span>
      </div>
      <table className="w-full text-left">
        <thead className="bg-gray-50/50 text-[10px] uppercase font-bold text-gray-400">
        <tr>
          <th className="px-8 py-4">Type</th>
          <th className="px-8 py-4">Amount</th>
          <th className="px-8 py-4">Created</th>
          <th className="px-8 py-4 text-right">Actions</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
        {data.map((item, i) => (
            <tr key={i} className="text-sm font-medium text-gray-600 hover:bg-gray-50/50">
              <td className="px-8 py-4 text-xs font-bold">{item.type}</td>
              <td className="px-8 py-4 text-gray-900">${item.amount}</td>
              <td className="px-8 py-4">{item.date}</td>
              <td className="px-8 py-4 text-right">—</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
);
export default DonationTable;