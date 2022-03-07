import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import CreateCourses from '../partials/Trainer/CreateCourses';
import Footer from '../partials/Footer';

function CreateCourse() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="page-container">
          <div className='content-wrap'>
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-body h-screen">

                {/* Cards */}
                <div className="flex flex-col gap-6">

                  <CreateCourses/>
                  
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

export default CreateCourse;