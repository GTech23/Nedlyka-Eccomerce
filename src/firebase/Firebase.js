import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js'

// Add Firebase products that you want to use
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCU3Cd1m44QIZ89iSdO6LFeTReRjkFYUfQ",
  authDomain: "nedlyka-ecommerce.firebaseapp.com",
  projectId: "nedlyka-ecommerce",
  storageBucket: "nedlyka-ecommerce.firebasestorage.app",
  messagingSenderId: "127342170534",
  appId: "1:127342170534:web:54e07efd5a3554498c3f67",
  measurementId: "G-YW6WS0LMV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
