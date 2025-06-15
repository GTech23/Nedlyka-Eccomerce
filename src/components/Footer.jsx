import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Link to="/" className="text-2xl font-bold mb-4 text-white">
            Nedlyka
          </Link>
          <p className="text-gray-400 mb-4">
            Your one-stop shop for quality products and unbeatable deals. Shop
            with confidence and enjoy fast delivery.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Shop</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-white">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/category" className="hover:text-white">
                Categories
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Deals
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>
        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Customer Service
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/policy" className="hover:text-white">
                Shipping & Returns
              </Link>
            </li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">About</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/policy" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Nedlyka. All rights reserved.
      </div>
      <p className="text-gray-500 text-center text-sm">
        Designed by{" "}
        <a className="text-amber-500" href="https://godstimeweb.vercel.app">
          Godstime Pious
        </a>
      </p>
    </footer>
  );
}

export default Footer;
