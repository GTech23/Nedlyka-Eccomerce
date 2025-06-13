import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";
import { auth, db } from "../firebase/Firebase";

function OrderPage() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          setOrders(data.previousOrders || []);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setErrors("Failed to load orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading orders...</p>
      </div>
    );
  }

  if (errors) {
    return (
      <div className="min-h-screen text-center flex flex-col gap-4 items-center justify-center">
        <p className="text-red-500">Failed to fetch orders</p>
        <p>
          {" "}
          Please check your internet connection or proceed to{" "}
          <Link to="/" className="text-blue-500">
            {" "}
            Home Page{" "}
          </Link>
        </p>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
        <p className="text-gray-500">No orders found.</p>
        <Link to="/" className="text-blue-500 block">
          {" "}
          Back to Home Page{" "}
        </Link>
      </div>
    );
  }

  return (
    <>
      <title>Nedlyka - Order</title>
      <section>
        <Header />
        <div className="mt-30 max-w-5xl mx-auto w-[90%]">
          <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
          <div className="grid grid-cols-1 gap-10">
            {/* Render each order using OrderCard */}
            {orders.map((order, idx) => (
              <OrderCard key={order.orderId || idx} order={order} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderPage;
