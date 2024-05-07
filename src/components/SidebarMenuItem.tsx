"use client";
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
    <>
      <a
        href={path}
        className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${
          pathname == path ? "bg-blue-800" : ""
        }`}
      >
        <div>{menuIcon}</div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">
            {title}
          </span>
          <span className="text-sm text-white/50 hidden md:block">
            {description}
          </span>
        </div>
      </a>
    </>
  );
};
