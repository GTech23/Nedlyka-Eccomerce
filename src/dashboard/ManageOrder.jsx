import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const orders = [
  { id: 1, customer: "John Doe", total: "$120", status: "Pending" },
  { id: 2, customer: "Jane Smith", total: "$80", status: "Fulfilled" },
  // ...more orders
];

function ManageOrder() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <main className="p-6">
          <h2 className="text-xl font-bold mb-4">Order Management</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Order ID</th>
                  <th className="px-4 py-2 text-left">Customer</th>
                  <th className="px-4 py-2 text-left">Total</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.customer}</td>
                    <td className="px-4 py-2">{order.total}</td>
                    <td className="px-4 py-2">{order.status}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-green-600 text-white rounded text-sm">
                        Fulfil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ManageOrder;
