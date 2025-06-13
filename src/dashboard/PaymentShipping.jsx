import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function PaymentShipping() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <main className="p-6">
          <h2 className="text-xl font-bold mb-4">
            Payment & Shipping Management
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded shadow p-6">
              <h3 className="font-semibold mb-2">Payment Gateways</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>PayPal</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Edit
                  </button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Stripe</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Edit
                  </button>
                </li>
                {/* Add more gateways */}
              </ul>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h3 className="font-semibold mb-2">Shipping Options</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Standard Shipping</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Edit
                  </button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Express Shipping</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Edit
                  </button>
                </li>
                {/* Add more options */}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PaymentShipping;
