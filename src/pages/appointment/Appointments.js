import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import Appointment from "../../partials/appointments/Appointment";

function Appointments() {
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
        <div className="page-container">
          <div className="content-wrap">
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Cards */}
                <div className="flex flex-col gap-6">{pathname === "/appointments" && <Appointment />}</div>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Appointments;
