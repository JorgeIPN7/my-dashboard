"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface props {
  title: string;
  description: string;
  menuIcon: JSX.Element;
  path: string;
}

export const SidebarMenuItem = ({
  title,
  description,
  menuIcon,
  path,
}: props) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={path}
        className={`inline-flex w-full items-center space-x-2 border-b border-slate-700 px-2 py-3 transition duration-150 ease-linear hover:bg-white/5 ${
          pathname == path ? "bg-blue-800" : ""
        }`}
      >
        <div>{menuIcon}</div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">
            {title}
          </span>
          <span className="hidden text-sm text-white/50 md:block">
            {description}
          </span>
        </div>
      </Link>
    </div>
  );
};
