"use client";
import DashboardStatsGrid from "@/components/dashboard/DashboardStatsGrid";
import TransactionChart from "@/components/dashboard/TransactionChart";
import RecentOrders from "@/components/dashboard/RecentOrders";
import BuyerProfilePieChart from "@/components/dashboard/BuyerProfilePieChart";
import PopularProducts from "@/components/dashboard/PopularProducts";
import Navbar from "@/components/utils/Navbar";
import Sidebar from "@/components/utils/Sidebar";
import { Plus } from "lucide-react";
import Link from "next/link";
import "@/styles/dashboard.css";

export default function Dashboard({user}) {
  return (
    <div className=" main">
      <Sidebar />
      <div className=" sub_main">
        <Navbar />
        <div className="sub">
          <div className=" my-3 px-1 pt-2 flex flex-row justify-between items-center">
            <div>
              <h1 className=" text_primary font-medium text-2xl">
                Welcome back, {user?.displayName}
              </h1>
              <h4 className=" text_muted mt-2">
                Upload products, manage and track your customers and orders.
              </h4>
            </div>
            <Link
              href="/upload"
              className=" px-3 lg:flex hidden py-2 items-center gap-2 rounded-md bg-sky-500 text-white"
            >
              <Plus /> Upload
            </Link>
          </div>
          <div className="w-full flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 w-full">
              <TransactionChart />
              <BuyerProfilePieChart />
            </div>
            <div className=" grid xl:grid-cols-3 grid-cols-2 gap-4 w-full">
              <RecentOrders />
              <PopularProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
