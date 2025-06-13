import { CartProvider } from "./context/CartContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductCategory from "./pages/ProductCategory";
import NotFound from "./pages/NotFound";

// Dashboard imports
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import ManageOrder from "./dashboard/ManageOrder";
import ManageProducts from "./dashboard/ManageProducts";
import PaymentShipping from "./dashboard/PaymentShipping";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/:categoryName" element={<ProductCategory />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="order" element={<ManageOrder />} />
            <Route path="products" element={<ManageProducts />} />
            <Route path="payment-shipping" element={<PaymentShipping />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </CartProvider>
  );
}

export default App;
