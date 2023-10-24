"use client";
import { auth } from "@/models/configs/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Index from "@/components/dashboard";
import Dashboard from "@/components/dashboard/dashboard";
import "@/styles/dashboard.css";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (client) => {
      if (client) setUser(client);
      return setIsLoading(false);
    });
  }, [user]);
  return (
    <div>
      {isLoading ? (
        <div className=" w-full h-screen flex items-center justify-center">
          <p className=" text-blue-500 text-lg font-medium">Loading...</p>
        </div>
      ) : user ? (
        <Dashboard user={user} />
      ) : (
        <Index />
      )}
    </div>
  );
}
