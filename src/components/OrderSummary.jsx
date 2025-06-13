import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";
import { auth } from "../firebase/Firebase";
import { db } from "../firebase/Firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

function OrderSummary() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  // Calculate total items
  const totalItems = cartItems.reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0
  );

  // Calculate total price in Naira (amount is already in Naira)
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + (Number(item.priceCents) || 0) * (Number(item.quantity) || 1),
    0
  );

  // Delivery fee (flat 1000 Naira)
  const deliveryFee = 1000;

  // Total before tax
  const totalBeforeTax = totalPrice + deliveryFee;

  // Estimated tax (7.5% of total before tax)
  const estimatedTax = totalBeforeTax * 0.075;

  // Final order total
  const orderTotal = totalBeforeTax + estimatedTax;

  // Format numbers to 2 decimal places and with commas
  const formatAmount = (amount) =>
    Number(amount).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const placeOrder = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      toast.error("You must be logged in to place an order.");
      return;
    }
    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    // Add amount property to each product in orderItems
    const orderItemsWithAmount = cartItems.map((item) => ({
      ...item,
      amount: (Number(item.price) || 0) * (Number(item.quantity) || 1),
    }));

    const orderData = {
      userId: currentUser.uid,
      paymentStatus: "pending",
      deliveryStatus: "pending",
      orderPlaced: new Date(),
      orderTotal: orderTotal,
      orderItems: orderItemsWithAmount,
    };

    try {
      // Add order to user's subcollection with auto-generated ID
      const orderRef = await addDoc(
        collection(db, "users", currentUser.uid, "orders"),
        orderData
      );

      // Add order summary (with orderId) to previousOrders array in user document
      await updateDoc(doc(db, "users", currentUser.uid), {
        previousOrders: arrayUnion({
          ...orderData,
          orderId: orderRef.id,
        }),
      });

      if (clearCart) clearCart();
      navigate("/order");
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="border-1 border-[rgb(222,222,222)] shadow-md rounded-md order-1 p-3 lg:order-2">
      <h3 className="font-bold text-xl mb-4">Order Summary</h3>
      <div className="border-b border-[rgb(222,222,222)]">
        <div className="grid grid-cols-[1fr_auto] mb-3">
          <div className="font-bold">Items ({totalItems})</div>
          <div className="">N{formatAmount(totalPrice)}</div>
        </div>
        <div className="grid grid-cols-[1fr_auto] mb-3">
          <div className="font-bold">Delivery & Handling:</div>
          <div className="">N{formatAmount(deliveryFee)}</div>
        </div>
        <div className="grid grid-cols-[1fr_auto] mb-3">
          <div className="font-bold">Total before tax:</div>
          <div className="">N{formatAmount(totalBeforeTax)}</div>
        </div>
        <div className="grid grid-cols-[1fr_auto] mb-3">
          <div className="font-bold">Estimated tax (7.5%):</div>
          <div className="">N{formatAmount(estimatedTax)}</div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto] mb-3 text-red-600">
        <div className=" text-xl font-extrabold">Order Total:</div>
        <div className="text-xl font-extrabold">
          N{formatAmount(orderTotal)}
        </div>
      </div>

      <button
        onClick={placeOrder}
        className="py-2 my-4 px-6  block text-center bg-[rgb(225,216,20)] w-full cursor-pointer rounded-lg text-[rgb(33,33,33)] font-bold hover:bg-[rgb(160, 153, 23)] transition-all"
      >
        Place your order
      </button>
    </div>
  );
}

export default OrderSummary;
