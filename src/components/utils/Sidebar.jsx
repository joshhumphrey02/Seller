"use client";
import classNames from "classnames";
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";
import { SIDEBAR_LINKS, SIDEBAR_BOTTOM_LINKS } from "@/models/SidebarLinks";
import { ActiveLinks } from "@/models/utils/activeLinks";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const linkClass =
  "flex items-center gap-2 font-normal px-3 py-2 hover:bg-sky-300 hover:no-underline active:bg-sky-400 rounded-sm text-base";
export default function Sidebar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const auth = getAuth();
  const router = useRouter();
  const logout = async()=> {
    try {
      let logout = await signOut(auth);
      if(logout) {
        toast.success("Logout successfully");
        return router.push("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <div
      className={classNames(
        sideBarOpen ? "z-30 w-[10.5rem]" : "",
        "bg_primary overflow-hidden pb-4 h-screen min-h-[600px] sticky top-0 insert-10  flex flex-col"
      )}
    >
      <div className="flex flex-col justify-center gap-2 px-1 py-3">
        <span className="flex justify-center">
          <FcBullish fontSize={24} />
        </span>
        <span
          className={
            sideBarOpen
              ? "justify-center flex"
              : "justify-center md:flex hidden"
          }
        >
          <Link href={"/"} className=" font-medium text-lg text-center">
            Arts of Electronics
          </Link>
        </span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5 relative">
        {SIDEBAR_LINKS.map((link) => (
          <ActiveLinks key={link.key} link={link} active={sideBarOpen} />
        ))}
        <div
          className=" md:hidden w-full flex justify-end  absolute bottom-6"
          onClick={() => setSideBarOpen(() => !sideBarOpen)}
        >
          {sideBarOpen ? <ArrowBigLeft /> : <ArrowBigRight />}
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-2 border-t border_color">
        {SIDEBAR_BOTTOM_LINKS.map((link) => (
          <ActiveLinks key={link.key} link={link} active={sideBarOpen} />
        ))}
        <div
          className={classNames(
            linkClass,
            "cursor-pointer  border-t font-medium border_color mb-3 bg-red-400 text_primary"
          )}
          onClick={logout}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          <span
            className={
              sideBarOpen
                ? "justify-center flex"
                : "justify-center md:flex hidden"
            }
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}
