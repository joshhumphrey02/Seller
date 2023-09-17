import DashboardStatsGrid from "@/components/admin/dashboard/DashboardStatsGrid";
import TransactionChart from "@/components/admin/dashboard/TransactionChart";
import RecentOrders from "@/components/admin/dashboard/RecentOrders";
import BuyerProfilePieChart from "@/components/admin/dashboard/BuyerProfilePieChart";
import PopularProducts from "@/components/admin/dashboard/PopularProducts";

export default function Dashboard() {
  return (
    <div className="w-full p-1 flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="charts grid grid-cols-3 gap-4 w-full">
        <TransactionChart />
        <BuyerProfilePieChart />
      </div>
      <div className="chart orders grid grid-cols-3 gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
}
