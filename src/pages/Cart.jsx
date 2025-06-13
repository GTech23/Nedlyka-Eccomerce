import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

import { useCart } from "../context/CartContext";
function Cart() {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
  return (
    <>
      <title>Nedlyka - Cart</title>
      <section className="max-w-6xl mx-auto w-[95%] p-4">
        <div className="flex items-center w-full gap-4 justify-between">
          <div>
            <Link to="/" className="text-md font-bold md:text-xl">
              Nedlyka Store
            </Link>
          </div>

          <div>
            <p className="text-md md:text-2xl">
              Checkout ({" "}
              <Link className="text-blue-500 ">
                {cartItemCount} {cartItemCount === 1 ? "Item" : "Items"}
              </Link>{" "}
              )
            </p>
          </div>

          <div>
            <img
              src="/src/assets/icons/checkout-lock-icon.png"
              alt="Checkout Lock icon"
            />
          </div>
        </div>

        <div className="my-20">
          <h2 className="text-2xl font-semibold mb-4">Review Your Orders</h2>

          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-[1fr_350px]">
            <div className="">
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is currently empty.</p>
              ) : (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    priceCents={item.priceCents}
                    imageUrl={item.imageUrl}
                    quantity={item.quantity}
                  />
                ))
              )}
            </div>

            <OrderSummary />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
