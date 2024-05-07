import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { BiAbacus } from "react-icons/bi";
import { SidebarMenuItem } from "./SidebarMenuItem";

const getDay = () => {
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const date = new Date();
  return `${days[date.getDay()]} ${date.getDate()} de ${
    months[date.getMonth()]
  } del ${date.getFullYear()}`;
};

const menuItems = [
  {
    title: "Dashboard",
    description: "Inicio",
    menuIcon: <MdDashboard size={30} />,
    path: "/dashboard/inicio",
  },
  {
    title: "Contador",
    description: "Ejercicio básico",
    menuIcon: <BiAbacus size={30} />,
    path: "/dashboard/counter",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-65 left-0 h-screen overflow-y-auto"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Jorge_IPN_<span className="text-red-50">7</span>
        </h1>
        <p className="text-slate-500 text-sm">{getDay()}</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido de vuelta,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              src="/next.svg"
              alt="Logo"
              className="rounded-full w-9 h-9 bg-cyan-50"
              width={100}
              height={24}
              priority
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item, index) => (
          <SidebarMenuItem
            key={item.path}
            title={item.title}
            description={item.description}
            menuIcon={item.menuIcon}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};
