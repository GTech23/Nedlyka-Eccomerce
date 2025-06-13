import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Illustration */}
      <img
        src="https://illustrations.popsy.co/gray/web-error.svg"
        alt="404 Not Found"
        className="w-72 md:w-96 mb-8"
      />
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.<br />
        Please check the URL or return to the homepage.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-700 transition"
      >
        Back to Home
      </button>
      <div className="mt-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Nedlyka Ecommerce. All rights reserved.
      </div>
    </div>
  );
}

export default NotFound;