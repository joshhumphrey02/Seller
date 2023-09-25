"use client";
import Index from "@/components/dashboard";
import Dashboard from "@/components/dashboard/dashboard";
import "@/styles/dashboard.css";

export const metadata = {
  title: "Sellers-ElectroniHaven",
  description: "Your first stop electronic online website",
};

export default function Page() {
  const user = true;
  return <div>{user ? <Dashboard /> : <Index />}</div>;
}
