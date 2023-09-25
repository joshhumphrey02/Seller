import Navbar from "@/components/utils/Navbar";
import Sidebar from "@/components/utils/Sidebar";

const page = () => {
  return (
    <div className=" main_seg relative w-screen grid h-screen">
      <Sidebar />
      <div
        style={{ gridTemplateRows: "5rem auto" }}
        className=" col-start-2 w-full gap-2 relative grid"
      >
        <Navbar />
        <div className="row-start-2 flex flex-col"></div>
      </div>
    </div>
  );
};

export default page;
