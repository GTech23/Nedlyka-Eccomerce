import { FaShoppingCart, FaBars, FaUser, FaTimes } from "react-icons/fa";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { auth, googleProvider } from "../firebase/Firebase";
function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { cartItems, clearCart } = useCart();
  const cartItemCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleSignOut = () => {
    signOut(auth, googleProvider)
      .then(() => {
        console.log("User signed out successfully");
        // Optionally, you can redirect to the home page or login page
        clearCart && clearCart([]);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // currentUser is null if not signed in
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <header className="bg-white p-4  z-1000 fixed top-0 left-0 right-0 shadow-md md:px-16 lg:px-20">
        <div className="w-full h-full flex items-center justify-between ">
          <Link to="/" className="text-lg font-bold">
            Nedlyka Stores
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden items-center gap-4 sm:flex">
              <FaUser className="text-neutral-500" />{" "}
              <span className="text-neutral-800 hover:text-amber-500">
                Sign in / Register
              </span>
            </Link>
            <Link
              to="/cart"
              className="bg-amber-500 relative p-3 cursor-pointer rounded-full hover:bg-amber-600 transition-colors duration-300"
            >
              <FaShoppingCart className="text-white text-lg" />
              <span className="py-1 px-2 bg-red-500 absolute -top-3  -right-1 font-bold text-white text-xs rounded-full">
                {cartItemCount}
              </span>
            </Link>

            <div className=" p-2 rounded-full sm:hidden">
              {isOpen ? (
                <FaTimes
                  className="text-neutral-600 text-2xl cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  className="text-neutral-600 cursor-pointer text-2xl"
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="mt-5">
            <Link
              to="/login"
              className="flex justify-center items-center gap-4 sm:hidden"
            >
              <FaUser className="text-neutral-500" />{" "}
              <span className="text-neutral-800 hover:text-amber-500">
                Sign in / Register
              </span>
            </Link>
          </div>
        )}
      </header>
    );
  } else {
    return (
      <header className="bg-white p-4  z-1000 fixed top-0 left-0 right-0 shadow-md md:px-16 lg:px-20">
        <div className="w-full h-full flex items-center justify-between ">
          <Link to="/" className="text-lg font-bold">
            Nedlyka Footwears
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/order" className="hidden items-center gap-4 sm:flex">
              <span className="text-neutral-800 hover:text-amber-500">
                Orders
              </span>
            </Link>
            <Link
              to="/cart"
              className="bg-amber-500 relative p-3 cursor-pointer rounded-full hover:bg-amber-600 transition-colors duration-300"
            >
              <FaShoppingCart className="text-white text-lg" />
              <span className="py-1 px-2 bg-red-500 absolute -top-3  -right-1 font-bold text-white text-xs rounded-full">
                {cartItemCount}
              </span>
            </Link>
            <button className=" justify-center items-center gap-4 hidden sm:flex">
              <FaUser className="text-neutral-500" />{" "}
              <span
                onClick={handleSignOut}
                role="button"
                className="text-neutral-800 hover:text-amber-500"
              >
                Logout
              </span>
            </button>
            <div className=" p-2 rounded-full sm:hidden">
              {isOpen ? (
                <FaTimes
                  className="text-neutral-600 text-2xl cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  className="text-neutral-600 cursor-pointer text-2xl"
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="mt-5">
            <Link
              to="/login"
              className="flex justify-center items-center gap-4 sm:hidden"
            >
              <FaUser className="text-neutral-500" />{" "}
              <span className="text-neutral-800 hover:text-amber-500">
                Logout
              </span>
            </Link>
            <Link
              to="/order"
              className="flex justify-center items-center gap-4 sm:hidden"
            >
              <span className="text-neutral-800 hover:text-amber-500">
                My Orders
              </span>
            </Link>
          </div>
        )}
      </header>
    );
  }
}
1;

export default Header;
