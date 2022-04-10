import React from 'react';
import { useLocation } from 'react-router-dom';

import SearchModal from './header/SearchModal';
import Notifications from './header/Notifications';
import UserMenu from './header/UserMenu';
import dashboard from '../images/Dashboard.png';

// redux
import {connect} from 'react-redux'

function Header({
  sidebarOpen,
  setSidebarOpen,
  ...props
}) {
  const location = useLocation();
  const { pathname } = location;
  const {user} = props
  return (
    <header className=" sticky top-0 bg-white border-b border-gray-200 z-30 pt-4 pb-4">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className='sm_display_none'>
            <div className="flex flex-row gap-2">
              <div>
                <img src={dashboard} alt="" className='pt-1'/>
              </div>
              {pathname.includes("trainings-dashboard")&&
                <div>
                  <p className='text-lg font-semibold'>Farmers</p>
                  <p className='text-lg font-semibold'>Learning Center</p>
                </div>
              }
              {pathname === "/dashboard" &&
                <div>
                  <p className='text-lg font-semibold'>Farmers</p>
                  <p className='text-lg font-semibold'>Learning Center</p>
                </div>
              }
              {pathname.includes("consultancy") &&
                <div>
                  <p className='text-lg font-semibold'>Available</p>
                  <p className='text-lg font-semibold'>Consultants</p>
                </div>
              }
              {pathname.includes("marketplace") &&
                <div>
                  <p className='text-lg font-semibold'>Product and services</p>
                  <p className='text-lg font-semibold'>Marketplace</p>
                </div>
              }
              {pathname.includes("trainer") &&
                <div>
                  <p className='text-lg font-semibold'>Trainers</p>
                  <p className='text-lg font-semibold'>Dashboard</p>
                </div>
              }
              {pathname.includes("users") &&
                <div>
                  <p className='text-lg font-semibold'>Users</p>
                  <p className='text-lg font-semibold'>Management</p>
                </div>
              }
              {pathname.includes("research") &&
                <div>
                  <p className='text-lg font-semibold'>Research</p>
                  <p className='text-lg font-semibold'>Innovation</p>
                </div>
              }
              {pathname.includes("appointments") &&
                <div>
                  <p className='text-lg font-semibold'>Consultants</p>
                  <p className='text-lg font-semibold'>Appointments</p>
                </div>
              }
              
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

            {/* <SearchModal />
            <Notifications /> */}
            {/*  Divider */}
            <hr className="w-px h-6 bg-gray-200 mx-3" />
            <UserMenu user={user} />

          </div>

        </div>
      </div>
    </header>
  );
}

// get the state of user isAuthenticated
const mapStateToProps = state =>({
  isAuthenticated:state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps)(Header);