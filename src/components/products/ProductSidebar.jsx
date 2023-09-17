"use client";
import Link from "next/link";
import { Categories_Links } from "@/models/utils/categories";
import { ActiveLinks } from "@/models/utils/activeLinks";
import { useEffect, useState } from "react";
import { FcMenu } from "react-icons/fc";
import { GrClose } from "react-icons/gr";

const Side = () => {
  return (
    <div className="pb-4 flex flex-1 flex-col gap-0.5">
      {Categories_Links.map((link) => (
        <ActiveLinks key={link.key} link={link} pro={true} />
      ))}
    </div>
  );
};

const ProductSidebar = () => {
  const [sidebar, setSidebar] = useState("flex");
  const [open, setOpen] = useState(true);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    newWidth > 859 ? setSidebar("flex") : null;
    newWidth > 859 ? setOpen(true) : null;
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);
  return (
    <div className="side seg_bg_primary fixed w-[11rem] p-1">
      <div className="open-btn mb-1 align-middle p-1 ">
        <span
          onClick={() => {
            setOpen(!open);
            setSidebar(open ? "none" : "flex");
          }}
          style={{ color: "white" }}
        >
          {open ? <GrClose size={42} /> : <FcMenu size={50} />}
        </span>
      </div>
      <div
        style={{ display: sidebar }}
        className="sub-side mb-1 mt-1 w-full flex justify-center md:py-4 lg:py-1  flex-col"
      >
        <Link
          href="/upload"
          className="side-link border border-sky-500 rounded-md px-3 pt-2 mb-2 pb-2 hover:no-underline hover:bg-sky-500 hover:text-white"
        >
          Upload product
        </Link>
        <Side />
      </div>
    </div>
  );
};

export default ProductSidebar;
