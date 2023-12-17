import React, { ReactElement } from 'react'
import {
  HomeModernIcon,
  ChartPieIcon,
  BellAlertIcon,
  ClipboardDocumentIcon,
  UserIcon,
  UserGroupIcon,
  ClipboardIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  RectangleStackIcon,
  ArchiveBoxIcon,
  PowerIcon, 
  CogIcon
} from '@heroicons/react/20/solid'
import NavLink from 'next/link'

type MenuItem = {
  name: String;
  icon: ReactElement | null;
  link: string;
  isActive: boolean; 
 }
 const menu1: MenuItem[] = [
  {
    name: "Home",
    icon: <HomeModernIcon width={18} className='text-gray-800' />,
    link: '/',
    isActive: true,
    
  },
  {
    name: "About",
    icon: <ChartPieIcon width={18} className='text-gray-800' />,
    link: '/about',
    isActive: false,
  },
  {
    name: "Category",
    icon: <ClipboardDocumentIcon width={18} className='text-gray-800' />,
    link: '/category',
    isActive: false,
  },
  {
    name: "Jenis",
    icon: <RectangleStackIcon width={18} className='text-gray-800' />,
    link: '/jenis',
    isActive: false,
  },
  {
    name: "Meja",
    icon: <ArchiveBoxIcon width={18} className='text-gray-800' />,
    link: '/meja',
    isActive: false,
  },
  {
    name: "Menu",
    icon: <ClipboardIcon width={18} className='text-gray-800' />,
    link: '/menu',
    isActive: false,
  },
  {
    name: "Pelanggan",
    icon: <UserGroupIcon width={18} className='text-gray-800' />,
    link: '/pelanggan',
    isActive: false,
  },
  {
    name: "Pemesanan",
    icon: <ClipboardDocumentListIcon width={18} className='text-gray-800' />,
    link: '/pemesanan',
    isActive: false,
  },
  {
    name: "Stok",
    icon: <FolderIcon width={18} className='text-gray-800' />,
    link: '/stok',
    isActive: false,
  },
];
const menu2: MenuItem[] = [
  {
    name: "Login",
    icon: <PowerIcon width={18} className='text-gray-800' />,
    link: '/',
    isActive: true,
  },
];

const MainHeader = () => {
  return (
    <div className="App">
      <section className='w-28 md:w-64 bg-slate-400 h-screen'>
        <div className="border-b p-5 text-center sm:text-left">
          Coffee Shop
        </div>
        <div className="p-3 border-b text-sm">
          <h6 className="mb-1 hidden sm:block">MASTER DATA</h6>
          <h6 className="mb-1 sm:hidden text-center">MASTER DATA</h6>
          <Menus menu={ menu1 } />
        </div>
        <div className="p-3 border-b text-sm">
          <h6 className="mb-1 hidden sm:block">AUTHENTICATION</h6>
          <h6 className="mb-1 sm:hidden text-center">AUTH</h6>
          <Menus menu={ menu2 }/>
        </div>
        <div className='flex mx-5 mt-4 bg-blue-300 bg-opacity-30 border-blue-100 rounded-md p-1 '>
          <img src="https://i.pinimg.com/736x/81/15/bb/8115bb46859f40f98ab712f3228de2f8.jpg" alt="img-profile" className='object-cover w-10 h-10 rounded-full' />
          <div className='flex-1 ml-3 items-center text-grey-700 hidden sm:block'>
            <div className='text-md'>Choi Jenna</div>
            <div className='text-xs'>Administrator</div>
          </div>
          <CogIcon width={24}/>
        </div>
      </section>
    </div>
  );


}
 const Menus: React.FC<{ menu : MenuItem[] }> = ({menu}) => {
  return (
    <div >
      <ul>
        {menu.map((menu, index) => {
          const menuActive = menu.isActive ? "bg-blue-200 bg-opacity-90 px-3 border border-blue-200 text-blue-800 py-2 rounded-md flex" : "px-4 py-2 flex"
          const textActive = menu.isActive ? "text-blue-800" : "text-grey-700"
        return (
          <li key={index} className= {`${menuActive} cursor-pointer mx-5`}>
            <NavLink href={menu.link} className='flex'>
              {menu.icon}
              <div className={`ml-2 ${textActive} hidden sm:block`}>
              {menu.name}
              </div>
            </NavLink>
          </li>
        );
 })}
      </ul>
    </div>
  );
}




export default MainHeader