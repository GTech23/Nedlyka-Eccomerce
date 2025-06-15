import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider, db } from "../firebase/Firebase";
import { toast } from "react-hot-toast";
import {
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Split fullName into firstName and lastName
      const [firstName, ...rest] = fullName.trim().split(" ");
      const lastName = rest.join(" ");
      await setDoc(doc(db, "users", user.uid), {
        uniqueId: user.uid,
        firstName: firstName || "",
        lastName: lastName || "",
        email: user.email,
        previousOrders: [],
        isAdmin: false,
      });
      navigate("/");
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user doc already exists
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        // Try to get first and last name from displayName
        let firstName = "";
        let lastName = "";
        if (user.displayName) {
          const nameParts = user.displayName.trim().split(" ");
          firstName = nameParts[0] || "";
          lastName = nameParts.slice(1).join(" ") || "";
        }
        await setDoc(userDocRef, {
          uniqueId: user.uid,
          firstName,
          lastName,
          email: user.email,
          previousOrders: [],
          isAdmin: false,
        });
      }

      navigate("/");
      toast.success("Signed in with Google successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <button
          className="mb-4 text-amber-600 hover:underline font-semibold"
          onClick={() => navigate("/")}
        >
          &larr; Back to Home
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Your Nedlyka Account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded font-semibold hover:bg-amber-700 transition"
            onClick={signIn}
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>
        <div className="flex items-center my-1">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <p className="text-md text-center mb-4">
          Already have an account?{" "}
          <Link className="text-amber-600" to="/login">
            Login
          </Link>
        </p>
        <button
          type="button"
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-50 transition"
          onClick={signInWithGoogle}
        >
          <FcGoogle className="mr-2 text-xl" />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default Register;
