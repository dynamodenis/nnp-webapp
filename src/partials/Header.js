import React from 'react';
import SearchModal from './header/SearchModal';
import Notifications from './header/Notifications';
import UserMenu from './header/UserMenu';
import dashboard from '../images/Dashboard.png';

function Header({
  sidebarOpen,
  setSidebarOpen
}) {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30 pt-4 pb-4">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className='sm_display_none'>
            <div className="flex flex-row gap-2">
              <div>
                <img src={dashboard} alt="" className='pt-1'/>
              </div>
              <div>
                <p className='text-lg font-medium'>Farmer</p>
                <p className='text-lg font-medium'>Learning Center</p>
              </div>
            </div>
          </div>
          {/* Header: Left side */}
          <div className="flex">

            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

          </div>

          {/* Header: Right side */}
          <div className="flex items-center">

            <SearchModal />
            <Notifications />
            {/*  Divider */}
            <hr className="w-px h-6 bg-gray-200 mx-3" />
            <UserMenu />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;