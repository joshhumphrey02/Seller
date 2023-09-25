import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

export default function DashboardStatsGrid() {
  return (
    <div className=" xl:grid-cols-4 md:grid-cols-2 grid-cols-1 grid gap-4 w-full">
      <BoxWrapper>
        <div className="h-12 rounded-full w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text_primary" />
        </div>
        <div className="pl-4">
          <span className="text-sm font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text_muted font-semibold">$54232</strong>
            <span className="text-sm text-green-500 pl-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="h-12 rounded-full w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text_primary" />
        </div>
        <div className="pl-4">
          <span className="text-sm font-light">Total Expenses</span>
          <div className="flex items-center">
            <strong className="text-xl text_muted font-semibold">$3423</strong>
            <span className="text-sm text-green-500 pl-2">-343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="h-12 rounded-full w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text_primary" />
        </div>
        <div className="pl-4">
          <span className="text-sm font-light">Total Customers</span>
          <div className="flex items-center">
            <strong className="text-xl text_muted font-semibold">12313</strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="h-12 rounded-full w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text_primary" />
        </div>
        <div className="pl-4">
          <span className="text-sm font-light">Total Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text_muted font-semibold">16432</strong>
            <span className="text-sm text-red-500 pl-2">-43</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg_primary rounded-sm p-4 flex-1 border border_color flex items-center">
      {children}
    </div>
  );
}
