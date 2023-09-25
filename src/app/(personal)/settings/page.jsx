import Navbar from "@/components/utils/Navbar";
import Sidebar from "@/components/utils/Sidebar";

export const metadata = {
  title: "Settings-ElectroniHaven",
  description: "Your first stop electronic online website",
};

export default function page() {
  return (
    <div className=" main_seg relative w-screen overflow-x-hidden grid h-screen">
      <Sidebar page="seller" />
      <div
        style={{ gridTemplateRows: "5rem auto" }}
        className=" col-start-2 w-[98%] gap-2 relative grid"
      >
        <Navbar />
        <div className=" p-1 row-start-2 flex flex-col"></div>
      </div>
    </div>
  );
}
