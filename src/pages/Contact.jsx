import { useState } from "react";
import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here (API call, etc.)
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src="https://illustrations.popsy.co/gray/contact-us.svg"
              alt="Contact Us"
              className="w-32 h-32 mb-4"
            />
            <h1 className="text-3xl font-extrabold text-blue-700 mb-2">
              Contact Us
            </h1>
            <p className="text-gray-600 text-center">
              Have a question, feedback, or need support? Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </div>
          {submitted ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-green-600 mb-2">Thank you!</h2>
              <p className="text-gray-600">Your message has been received. We’ll get in touch soon.</p>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={5}
                  required
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
          <div className="mt-8 text-center text-gray-500 text-sm">
            Or email us directly at{" "}
            <a href="mailto:support@nedlyka.com" className="text-blue-600 hover:underline">
              support@nedlyka.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;