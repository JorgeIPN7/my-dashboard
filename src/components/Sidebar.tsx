import Image from 'next/image';
import { MdDashboard } from 'react-icons/md';
import { BiAbacus } from 'react-icons/bi';
import { FaSpaghettiMonsterFlying } from 'react-icons/fa6';
import { SidebarMenuItem } from './SidebarMenuItem';

const getDay = () => {
  const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ];
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
  const date = new Date();
  return `${days[date.getDay()]} ${date.getDate()} de ${
    months[date.getMonth()]
  } del ${date.getFullYear()}`;
};

const menuItems = [
  {
    title: 'Dashboard',
    description: 'Inicio',
    menuIcon: <MdDashboard size={30} />,
    path: '/dashboard/inicio'
  },
  {
    title: 'Contador',
    description: 'Ejercicio básico',
    menuIcon: <BiAbacus size={30} />,
    path: '/dashboard/counter'
  },
  {
    title: 'Pokémons',
    description: 'Lista de pokémons',
    menuIcon: <FaSpaghettiMonsterFlying size={30} />,
    path: '/dashboard/pokemons'
  }
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="w-65 left-0 z-10 min-h-screen overflow-y-auto bg-gray-900 text-slate-300"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg font-bold text-white md:text-2xl">
          Jorge_IPN_<span className="text-red-50">7</span>
        </h1>
        <p className="text-sm text-slate-500">{getDay()}</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido de vuelta,</p>
        <a href="#" className="inline-flex items-center space-x-2">
          <span>
            <Image
              src="/next.svg"
              alt="Logo"
              className="h-9 w-9 rounded-full bg-cyan-50"
              width={100}
              height={24}
              priority
            />
          </span>
          <span className="text-sm font-bold md:text-base">Edward Tompson</span>
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
