import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.jpeg';

// import SidebarLinkGroup from './SidebarLinkGroup';
import HomeIcon from '@mui/icons-material/Home';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import UploadIcon from '@mui/icons-material/Upload';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HelpIcon from '@mui/icons-material/Help';

function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-white bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
            <div className='flex flex-row justify-center item-center pt-1'>
                <img src={logo} alt="" className='w-14 pt-1 pb-1 m-auto'/>
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-600 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Menu</span>
            </h3>
            <ul className="mt-3">
              {/* Home */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/' && 'nav-yellow'}`}>
                <NavLink exact to="/" className={`block text-gray-600 hover:text-gray-900 truncate transition duration-150 ${pathname === '/' && 'hover:text-gray-900'}`}>
                  <div className="flex items-center">
                    <HomeIcon className={`fill-current text-gray-400 ${pathname === '/' && '!text-gray-500'}`}/>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Home</span>
                  </div>
                </NavLink>
              </li>
              {/* Dashboard */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/dashboard' && 'nav-yellow'}`}>
                <NavLink exact to="/dashboard" className={`block text-gray-600 hover:text-gray-900 truncate transition duration-150 ${pathname === '/dashboard' && 'hover:text-gray-900'}`}>
                  <div className="flex items-center">
                    <ModelTrainingIcon className={`fill-current text-gray-500 ${pathname === '/dashboard' && '!text-gray-600'}`}/>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">My Training</span>
                  </div>
                </NavLink>
              </li>
              {/* training */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('trainings-dashboard') && 'nav-yellow'}`}>
                <NavLink exact to="/trainings-dashboard" className={`block text-gray-600 hover:text-gray-900 truncate transition duration-150 ${pathname.includes('trainings-dashboard') && 'hover:text-gray-900'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600 ${pathname.includes('trainings-dashboard') && 'text-gray-500'}`} d="M0 20h24v2H0z" />
                      <path className={`fill-current text-gray-400 ${pathname.includes('trainings-dashboard') && 'text-gray-300'}`} d="M4 18h2a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1zM11 18h2a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v14a1 1 0 001 1zM17 12v5a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1z" />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Trainings</span>
                  </div>
                </NavLink>
              </li>
              
              {/* Market place */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('marketplace') && 'nav-yellow'}`}>
                <NavLink exact to="/marketplace" className={`block text-gray-600 hover:text-gray-900 truncate transition duration-150 ${pathname.includes('marketplace') && 'hover:text-gray-900'}`}>
                  <div className="flex items-center">
                    <LocalGroceryStoreIcon className={`fill-current text-gray-500 ${pathname.includes('marketplace') && 'text-gray-600'}`} />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Market Place</span>
                  </div>
                </NavLink>
              </li>
              {/* courses */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('/trainer/courses') && 'nav-yellow'}`}>
                <NavLink exact to="/trainer/courses" className={`block text-gray-600 hover:text-gray-900 truncate transition duration-150 ${pathname.includes('/trainer/courses') && 'hover:text-gray-900'}`}>
                  <div className="flex items-center">
                    <UploadIcon className={`fill-current text-gray-500 ${pathname.includes('/trainer/courses') && 'text-gray-600'}`}/>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">My Courses/Upload</span>
                  </div>
                </NavLink>
              </li>
              {/* consultancy */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('/consultancy') && 'nav-yellow'}`}>
                <NavLink exact to="/consultancy" className={`block text-gray-600 hover:text-gray-900 truncate transition duration-150 ${pathname.includes('/consultancy') && 'hover:text-gray-900'}`}>
                  <div className="flex items-center">
                    <HelpIcon className={`fill-current text-gray-500 ${pathname.includes('/consultancy') && 'text-gray-600'}`}/>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Consultancy</span>
                  </div>
                </NavLink>
              </li>
              {/* users */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('users') && 'nav-yellow'}`}>
                <NavLink exact to="/users" className={`block text-gray-600 hover:text-gray-900 truncate transition duration-150 ${pathname.includes('users') && 'hover:text-gray-900'}`}>
                  <div className="flex items-center">
                    <PeopleAltIcon className={`fill-current text-gray-500 ${pathname.includes('users') && 'text-gray-600'}`}/>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Users</span>
                  </div>
                </NavLink>
              </li>
              {/* Inbox */}
              {/* <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('inbox') && 'bg-gray-900'}`}>
                <NavLink exact to="/" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('inbox') && 'hover:text-gray-200'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600 ${pathname.includes('inbox') && 'text-indigo-500'}`} d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
                      <path className={`fill-current text-gray-400 ${pathname.includes('inbox') && 'text-indigo-300'}`} d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z" />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Inbox</span>
                  </div>
                </NavLink>
              </li> */}
              {/* Calendar */}
              {/* <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('calendar') && 'bg-gray-900'}`}>
                <NavLink exact to="/" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('calendar') && 'hover:text-gray-200'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600 ${pathname.includes('calendar') && 'text-indigo-500'}`} d="M1 3h22v20H1z" />
                      <path className={`fill-current text-gray-400 ${pathname.includes('calendar') && 'text-indigo-300'}`} d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z" />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Calendar</span>
                  </div>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-gray-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-gray-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;