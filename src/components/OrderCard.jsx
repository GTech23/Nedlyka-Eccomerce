import { FaCreditCard } from "react-icons/fa";
import { toast } from "react-hot-toast";

import {
  doc,
  updateDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";
import { db } from "../firebase/Firebase";
import { auth } from "../firebase/Firebase";
function OrderCard({ order }) {
  let orderDate = "";
  if (order.orderPlaced) {
    if (order.orderPlaced.seconds) {
      // Firestore Timestamp object
      orderDate = new Date(order.orderPlaced.seconds * 1000);
    } else {
      orderDate = new Date(order.orderPlaced);
    }
  }

  const formattedDate = orderDate
    ? orderDate.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  const formatAmount = (amount) =>
    Number(amount).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const currentUser = auth.currentUser;
  const FLUTTERWAVE_PUBLIC_KEY = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY;
  const makePayment = () => {
    window.FlutterwaveCheckout({
      public_key: FLUTTERWAVE_PUBLIC_KEY,
      tx_ref: order.orderId,
      amount: order.orderTotal,
      currency: "NGN",
      payment_options: "card,ussd,banktransfer,ussd",
      customer: {
        email: currentUser.email,
        phone_number: currentUser.phoneNumber || "N/A",
        name: "Test Name",
      },
      customizations: {
        title: "Nedlyka Footwears",
        description: "Payment for items in cart",
        logo: "https://your-logo-url.com/logo.png",
      },
      callback: async function (data) {
        console.log(data);
        if (data.tx_ref === order.orderId) {
          if (data.status === "completed") {
            toast.success("Payment was successful!");

            // Update paymentStatus in Firestore inside previousOrder array
            try {
              const userDocRef = doc(db, "users", order.userId);
              const userDocSnap = await getDoc(userDocRef);
              console.log(userDocSnap.data());
              if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                const updatedPreviousOrder = userData.previousOrders.map((o) =>
                  o.orderId === order.orderId
                    ? { ...o, paymentStatus: "paid" }
                    : o
                );
                await updateDoc(userDocRef, {
                  previousOrders: updatedPreviousOrder,
                });
                toast.success("Order payment status updated!");
              } else {
                toast.error("User document not found.");
              }
            } catch (err) {
              toast.error("Failed to update payment status in database.");
              console.error(err);
            }
          }
        }
      },
      onclose: function () {},
    });
  };

  return (
    <div className="rounded-md border-1 border-[rgb(222,222,222)] ">
      <div className="flex flex-col justify-between bg-[rgb(240,242,242)] p-4 mb-4 md:items-start md:flex-row">
        <div className="flex flex-col gap-1">
          <p
            className={`${
              order.paymentStatus === "paid" ? "text-green-600" : "text-red-600"
            }  font-semibold`}
          >
            Payment Status: {order.paymentStatus}
          </p>
          <p className="text-red-600 font-semibold">
            Delivery Status: {order.deliveryStatus}
          </p>
        </div>

        <div className="flex flex-col  justify-between gap-4 md:items-center md:flex-row">
          <div className="flex gap-2 md:flex-col">
            <p>Order Placed:</p>
            <p>{formattedDate}</p>
          </div>

          <div className="flex gap-2 md:flex-col">
            <p>Total</p>
            <p>{formatAmount(order.orderTotal)}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="">
            <p>Order Id:</p>
            <p>{order.orderId}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_1fr] justify-between p-4">
        <div>
          {order.orderItems.map((item) => {
            return (
              <div key={item.id} className="flex mb-3  gap-4 items-center">
                <div className="">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="max-w-full max-h-[110px]"
                  />
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                  <div>
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button
            onClick={makePayment}
            className={`${
              order.paymentStatus === "paid" ? "hidden" : "flex "
            } self-end items-center gap-4 py-1 mt-2 px-3 rounded-lg shadow-md bg-yellow-400 cursor-pointer md:py-2 md:px-4 bg-[rgb(225,216,20)`}
          >
            Make Payment
            <FaCreditCard />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
