function MetricCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded shadow p-6 flex items-center space-x-4">
      <div className="text-3xl text-blue-600">{icon}</div>
      <div>
        <div className="text-gray-500 text-sm">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
}

export default MetricCard;
