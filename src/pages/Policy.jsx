import Footer from "../components/Footer";

function Policy() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col items-center px-4 py-12">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-blue-700 mb-2">Our Policies</h1>
            <p className="text-gray-600 text-lg">
              Please read our Privacy Policy, Terms & Conditions, Terms of Use, Shipping/Return Policy, and Order Tracking information carefully.
            </p>
          </div>

          {/* Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Privacy Policy</h2>
            <p className="text-gray-600 mb-2">
              At Nedlyka, your privacy is important to us. We collect only the information necessary to process your orders and provide you with the best shopping experience. Your data is stored securely and never shared with third parties except as required to fulfill your order or by law.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>We use secure encryption for all transactions.</li>
              <li>Your personal data is never sold or rented.</li>
              <li>You can request to view, update, or delete your data at any time.</li>
              <li>Cookies are used to enhance your browsing experience.</li>
            </ul>
          </section>

          {/* Terms and Conditions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Terms & Conditions</h2>
            <p className="text-gray-600 mb-2">
              By using Nedlyka, you agree to our terms and conditions. These terms govern your use of our website and services.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>All orders are subject to availability and confirmation.</li>
              <li>Prices and product information are subject to change without notice.</li>
              <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
              <li>Returns and exchanges are accepted within 14 days of delivery, subject to our return policy.</li>
              <li>By placing an order, you confirm that all information provided is accurate and complete.</li>
            </ul>
          </section>

          {/* Terms of Use */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Terms of Use</h2>
            <p className="text-gray-600 mb-2">
              Your use of Nedlyka’s website and services is subject to the following terms of use:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>You may not use our site for any unlawful purpose.</li>
              <li>All content on this site is the property of Nedlyka and may not be reproduced without permission.</li>
              <li>You are responsible for maintaining the confidentiality of your account and password.</li>
              <li>We may update these terms at any time; continued use of the site constitutes acceptance of any changes.</li>
            </ul>
          </section>

          {/* Shipping / Return Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Shipping & Return Policy</h2>
            <p className="text-gray-600 mb-2">
              We are committed to delivering your orders quickly and efficiently. Please review our shipping and return conditions below:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Orders are processed within 1-2 business days after payment confirmation.</li>
              <li>Standard shipping typically takes 3-7 business days, depending on your location.</li>
              <li>Express shipping options are available at checkout for faster delivery.</li>
              <li>Returns and exchanges are accepted within 14 days of delivery. Items must be unused and in original packaging.</li>
              <li>To initiate a return, please contact our support team with your order details.</li>
              <li>Refunds are processed within 5-7 business days after receiving the returned item.</li>
            </ul>
          </section>

          {/* Order Tracking */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Tracking</h2>
            <p className="text-gray-600 mb-2">
              Stay updated on your order status at every step:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Once your order is shipped, you will receive a tracking number via email.</li>
              <li>You can track your order status anytime by logging into your Nedlyka account and visiting the "My Orders" section.</li>
              <li>If you have any issues with tracking or delivery, please contact our support team for assistance.</li>
            </ul>
          </section>

          <div className="text-center text-gray-500 text-sm mt-8">
            If you have any questions about our policies, please contact us at{" "}
            <a href="mailto:support@nedlyka.com" className="text-blue-600 hover:underline">
              support@nedlyka.com
            </a>
            .
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Policy;