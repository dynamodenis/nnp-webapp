import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import CourseDetails from "../partials/courses/CourseDetails";
import Footer from '../partials/Footer';

function TrainingDetails() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-body h-full">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="page-container">
          <div className="content-wrap">
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                {/* Cards */}
                <div className="flex flex-col gap-6">

                  <CourseDetails/>
                  
                </div>

              </div>
            </main>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default TrainingDetails;