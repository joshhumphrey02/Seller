"use client";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const linkClass =
  "flex items-center gap-2 font-normal px-3 py-2 hover:bg-sky-300 hover:no-underline active:bg-sky-400 rounded-sm text-base";

export function ActiveLinks({ link, active }) {
  const pathname = usePathname();
  const editLink = (path) => {
    let newLink = path.split("/")[1] ? path.split("/")[1] : "dashboard";
    return newLink;
  };
  return (
    <Link
      href={link.path}
      className={classNames(
        link.key === editLink(pathname)
          ? "bg-sky-500 text_primary"
          : "text_primary",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      <span className={active ? "inline-block" : "md:inline-block hidden"}>
        {link.label}
      </span>
    </Link>
  );
}
