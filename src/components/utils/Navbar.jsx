"use client";
import Link from "next/link";
import { HiOutlineBell, HiOutlineChatAlt } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Navbar() {
  return (
    <div className="bg_primary grid lg:grid-cols-7 lg:grid-rows-1 grid-cols-4 grid-rows-2 sticky z-20 top-0 lg:h-16 h-fit tablet:gap-0 gap-3 lg:px-1 px-2 items-center xl:pb-0 pb-2 mb-2 border-b border_color">
      <form className="w-full items-center row-start-2 lg:row-start-1 lg:col-span-3 col-span-4 border border-slate-600 rounded-md flex gap-1 ">
        <Input
          type="search"
          placeholder="Search..."
          className=" flex-1 px-2 active:outline-none"
        />
        <button
          type="submit"
          className=" bg-sky-500 hidden md:block rounded-md px-3 py-2"
        >
          Search
        </button>
        <Button variant="blue" size="icon" className="md:hidden block">
          <Search className="h-[2rem] w-[2rem]" color="blue" />
        </Button>
      </form>
      <div className="nav-profile col-span-4 lg:flex-row full flex justify-end items-center lg:gap-6 sm:gap-10 gap-4 mx-2">
        <Link
          className="flex align-middle text_primary gap-1 outline-1 outline outline-sky-700 rounded-sm px-2 py-1"
          href="/admin/messages"
        >
          <HiOutlineChatAlt size={24} />{" "}
          <span className="text-sm md:inline-block hidden">Messages</span>
        </Link>
        <Link
          className="flex align-middle text_primary gap-1 outline-1 outline outline-sky-700 rounded-sm px-2 py-1"
          href="/admin/notifications"
        >
          <HiOutlineBell size={24} />{" "}
          <span className="text-sm md:inline-block hidden">Notifications</span>
        </Link>
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="h-10 w-10 rounded-full bg-sky-500 overflow-hidden bg-cover bg-no-repeat bg-center"
          >
            <Image
              src="/profile.png"
              width={40}
              height={40}
              alt="profile image"
              className=" object-contain"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="xl:block hidden">
            <DropdownMenuItem>
              <Link
                className="flex items-center gap-1 rounded-sm text-base text_muted w-full "
                href="/account"
              >
                <FaUser />
                Account
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex items-center gap-1 rounded-sm text-base text_muted w-full "
                href="/settings"
              >
                <MdSettings /> Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className=" font-normal flex items-center cursor-pointer py-1 w-full gap-1 rounded-sm text-base text_primary bg-sky-400">
                <PiSignOut />
                Logout
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
