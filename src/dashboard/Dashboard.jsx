import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MetricCard from "./MetricCard";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="Total Sales"
            value="$12,500"
            icon={<FaDollarSign />}
          />
          <MetricCard title="Orders" value="320" icon={<FaShoppingCart />} />
          <MetricCard title="Customers" value="150" icon={<FaUsers />} />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
