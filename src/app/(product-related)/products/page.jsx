"use client";
import Navbar from "@/components/utils/Navbar";
import Sidebar from "@/components/utils/Sidebar";
import { Categories_Links } from "@/models/utils/categories";

export default function page() {
  return (
    <div className="main">
      <Sidebar />
      <div className="sub_main">
        <Navbar />
        <div className="sub">
          <div className="flex gap-2 w-full flex-row h-fit overflow-scroll">
            {Categories_Links.map((item) => (
              <div key={item.key} value={item.label}>
                <div className=" w-[5rem] text-sm sm:w-[9rem] sm:text-base md:w-[12rem] md:text-lg h-[5rem] bg_primary flex items-center justify-center rounded shadow-lg">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
