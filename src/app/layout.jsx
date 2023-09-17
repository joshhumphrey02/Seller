"use client";
import "@/styles/dashboard.css";
import Navbar from "@/components/admin/utils/Navbar";
import Sidebar from "@/components/admin/utils/Sidebar";

export default function Layout({ children }) {
  return (
    <div className=" main_seg relative w-screen overflow-x-hidden grid h-screen">
      <Sidebar page="seller" />
      <div
        style={{ gridTemplateRows: "5rem auto" }}
        className=" col-start-2 w-full gap-2 relative grid"
      >
        <Navbar />
        <div className=" p-1 row-start-2 flex flex-col">{children}</div>
      </div>
    </div>
  );
}
