import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Research from '../../partials/research/research/Research';
import ResearchCategory from '../../partials/research/research_category/ResearchCategory';


function Researches() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-body h-full">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Cards */}
            <div className="flex flex-col gap-6">
              {pathname === "/research" && <Research/>}  
              {pathname === "/research/category" && <ResearchCategory/> }  
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Researches