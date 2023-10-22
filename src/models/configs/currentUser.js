"use client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CurrentUser = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        toast.success("Sign in Successfully");
      } else {
        toast.success("Logout successfully");
      }
      return setUser(data);
    });
  }, [auth]);

  return user;
};
