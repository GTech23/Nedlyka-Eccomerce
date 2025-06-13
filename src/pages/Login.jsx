import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { auth, googleProvider } from "../firebase/Firebase";
import { toast } from "react-hot-toast";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Failed to sign in.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Google sign in failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <button
          className="mb-4 text-blue-600 hover:underline font-semibold"
          onClick={() => navigate("/")}
        >
          &larr; Back to Home
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign In to Nedlyka
        </h2>
        <form className="space-y-4" onSubmit={handleEmailLogin}>
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Signing in ..." : "Sign in"}
          </button>
        </form>
        <div className="flex items-center my-1">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <p className="text-md text-center mb-4">
          Don't have an account?{" "}
          <Link className="text-blue-600" to="/register">
            Register{" "}
          </Link>
        </p>
        <button
          type="button"
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-50 transition"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle className="mr-2 text-xl" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
