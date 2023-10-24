import Link from "next/link";
import { ModeToggle } from "../utils/ModeToggle";
import Image from "next/image";

const Index = () => {
  return (
    <div className="">
      <div className=" bg_primary h-16 flex items-center p-1 justify-between px-2">
        <h1 className=" font-medium text-2xl">
          Art of Electronics
        </h1>
        <nav>
          <ul className=" flex gap-3 items-center transition">
            <li className=" md:block hidden">
              <Link href="/help">Help Center</Link>
            </li>
            <li className=" md:block hidden">
              <Link href="/support">Supoort</Link>
            </li>
            <li className=" bg-sky-500 rounded-md px-1 py-2">
              <Link href="/auth/register">Join AOE</Link>
            </li>
            <li className=" md:block hidden">
              <Link href="/auth/login">My Account</Link>
            </li>
            <ModeToggle />
          </ul>
        </nav>
      </div>
      <div className=" my-3 bg_primary p-1 ">
        <h2 className=" text-center my-1">Why sell on ElectroniHaven?</h2>
        <div className=" mt-4 grid gap-4 grid-cols-2 md:grid-cols-4 justify-between px-2 items-center">
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
      <div className=" bg_primary  my-3 p-2">
        <h1 className=" text-center font-3xl">
          Art of Electronics is the e-commerce retail <br />
          platform of various services, serving buyers <br />
          with quality and tested products.
        </h1>
      </div>
      <div className=" w-full bg_primary">
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          tempore ullam magni iusto quos voluptate explicabo, minus a laborum!
          Officia animi dolores tempore temporibus consequuntur repellat
          pariatur quia sit tempora.
        </h1>
      </div>
    </div>
  );
};

export default Index;
