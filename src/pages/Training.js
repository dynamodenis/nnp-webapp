import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import CoursesDashboard from '../partials/courses/CoursesDashboard';
import CoursesHomePage from '../partials/courses/CoursesHomePage';


function Training() {
  const location = useLocation();
  const { pathname } = location;

  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              {/* courses/ trainings */}
              {pathname.includes("/trainings-dashboard/category") && <CoursesDashboard/>}
              {/* Trainings dashbaord */}
              {pathname === "/trainings-dashboard" && <CoursesHomePage/>}
              
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Training;