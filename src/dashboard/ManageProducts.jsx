import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const products = [
  { id: 1, name: "Product A", price: "$25", stock: 10 },
  { id: 2, name: "Product B", price: "$40", stock: 5 },
  // ...more products
];

function ManageProducts() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <div className="flex-1 flex flex-col">

        <main className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Product Management</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Add Product
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Stock</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t">
                    <td className="px-4 py-2">{product.id}</td>
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">{product.price}</td>
                    <td className="px-4 py-2">{product.stock}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded text-sm">
                        Delete
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

export default ManageProducts;
