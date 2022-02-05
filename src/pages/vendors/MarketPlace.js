import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import MarketPlaceProducts from '../../partials/marketplace/MarketPlaceProducts';

// import CreateCourses from '../partials/Trainer/CreateCourses';

function MarketPlace() {
    const location = useLocation();
    const { pathname } = location;
  

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-body h-screen">

            {/* Cards */}
            <div className="flex flex-col gap-6">

              {pathname === "/marketplace" && <MarketPlaceProducts/>}
              
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default MarketPlace;