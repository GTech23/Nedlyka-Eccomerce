import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
function About() {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What products does Nedlyka offer?",
      answer:
        "Nedlyka offers a wide range of quality footwears including crocs, pams, shoes, sneakers, and more. We partner with top brands to ensure quality and variety for our customers.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is placed, you will receive an email notification when your order is ready. You can also log in to your Nedlyka account and view your order status.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept secure payments powered by FlutterWave via credit/debit cards, Bank Transfer, USSD, and other trusted payment gateways. All transactions are encrypted for your safety.",
    },

    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7 via live chat, email (support@nedlyka.com), or phone (08066884985). We are always here to help you with any questions or concerns.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img
              src="https://illustrations.popsy.co/gray/shopping-bags.svg"
              alt="About Nedlyka"
              className="w-40 h-40 mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h1 className="text-4xl font-extrabold text-amber-700 mb-2">
                About Nedlyka
              </h1>
              <p className="text-gray-600 text-lg">
                Nedlyka is your trusted destination for quality products,
                unbeatable deals, and a seamless shopping experience. We are
                passionate about connecting customers with the best brands and
                products, all in one place.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To empower shoppers with convenience, value, and trust. We strive
              to deliver exceptional service, fast shipping, and a curated
              selection of products to meet your every need.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Why Shop With Us?
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Wide range of quality products</li>
              <li>Secure and easy payment options</li>
              <li>Fast and reliable shipping</li>
              <li>Dedicated customer support</li>
              <li>Exclusive deals and offers</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Meet Our Team
            </h2>
            <p className="text-gray-600">
              Our team is made up of passionate professionals dedicated to
              making your shopping experience smooth and enjoyable. We believe
              in innovation, integrity, and putting our customers first.
            </p>
          </div>
          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-amber-700 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    aria-expanded={openFAQ === idx}
                  >
                    <span className="font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    <span className="ml-2 text-amber-600 text-xl">
                      {openFAQ === idx ? "-" : "+"}
                    </span>
                  </button>
                  {openFAQ === idx && (
                    <div className="px-4 pb-4 text-gray-600 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <button
              onClick={() => navigate("/")}
              className="bg-amber-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-amber-700 transition mb-4 md:mb-0"
            >
              Back to Home
            </button>
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Nedlyka Ecommerce. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
