import Link from "next/link";
import { ModeToggle } from "../utils/ModeToggle";

const Index = () => {
  return (
    <div className="">
      <div className=" bg_primary h-16 flex items-center p-1 justify-between px-2">
        <h1 className=" font-medium text-2xl">
          Electroni<span className=" text-sky-600">Haven</span>
        </h1>
        <nav>
          <ul className=" flex gap-3 items-center transition">
            <li>
              <Link href="/help">Help Center</Link>
            </li>
            <li>
              <Link href="/support">Supoort</Link>
            </li>
            <li className=" bg-sky-500 rounded-md p-1">
              <Link href="/register">Join ElectroniHaven</Link>
            </li>
            <li>
              <Link href="/login">My Account</Link>
            </li>
            <ModeToggle />
          </ul>
        </nav>
      </div>
      <div className=" my-3 bg_primary p-1 ">
        <h2 className=" text-center my-1">Why sell on ElectroniHaven?</h2>
        <div className=" mt-4 flex justify-between px-2 items-center">
          {[
            { id: "Connect with buyers" },
            { id: "Sell more products" },
            { id: "Improve revenue" },
            { id: "Top notch seller support" },
          ].map((item) => (
            <h3 key={item.id} className="px-4 py-3 rounded bg-sky-500">
              {item.id}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
