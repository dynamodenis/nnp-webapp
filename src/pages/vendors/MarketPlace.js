import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import MarketPlaceProducts from '../../partials/marketplace/MarketPlaceProducts';
import ProductCategory from '../../partials/marketplace/product_category/ProductCategory';
import ProductDetails from '../../partials/marketplace/products/ProductDetails';
import Footer from '../../partials/Footer';

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
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-body h-full">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="page-container">
          <div className='content-wrap'>
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                {/* Cards */}
                <div className="flex flex-col gap-6">

                  {pathname === "/marketplace" && <MarketPlaceProducts/>}
                  {pathname === "/marketplace/products/category" && <ProductCategory/>}
                  {pathname.includes("/marketplace/product/details") && <ProductDetails/>}
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

export default MarketPlace;