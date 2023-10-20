import Navbar from "@/components/utils/Navbar";
import Sidebar from "@/components/utils/Sidebar";

export const metadata = {
  title: "Settings-ElectroniHaven",
  description: "Your first stop electronic online website",
};

export default function page() {
  return (
    <div className=" main">
      <Sidebar />
      <div
        className="sub_main"
      >
        <Navbar />
        <div className="sub">
          
        </div>
      </div>
    </div>
  );
}