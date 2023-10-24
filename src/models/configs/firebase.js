import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAaq_0o4auZO5VWbAO8iXiWFcyVsz6VWqs",
  authDomain: "art-of-electronics.firebaseapp.com",
  projectId: "art-of-electronics",
  storageBucket: "art-of-electronics.appspot.com",
  messagingSenderId: "450802443011",
  appId: "1:450802443011:web:6efebecac52e3e63a1bf36",
  measurementId: "G-0T0EGLP87N"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);