"use client";
import { createContext, useContext, useEffect, useState } from "react";
import "./firebase_config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const unsubscribe = onAuthStateChanged(
    auth,
    () => {
      setUser(() => auth.currentUser);
    },
    (error) => console.log(error)
  );

  useEffect(() => {
    return () => unsubscribe();
  }, [unsubscribe]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const User = () => useContext(AuthContext);
