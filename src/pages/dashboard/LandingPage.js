import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import wallpaper from '../../images/wallpaper.png'
import goal from '../../images/goal.svg'
import sales from '../../images/sales.svg'
import cow from '../../images/cow.svg'
import consultants from '../../images/consultants.svg'
import products from '../../images/products.svg'
import Footer from '../../partials/Footer';

// import Banner from '../partials/Banner';


function LandingPage() {

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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-body h-full">

            {/* Cards */}
            <div className="flex flex-col gap-6">
              <div>
                <div className='relative'>
                  <div>
                    <img src={wallpaper} alt="" className='h-60vh md:h-auto' />
                  </div>
                  <div className='absolute top-16'>
                    <h1 className='text-white w-3/4 md:w-2/4 m-auto text-2xl font-semibold'>Training &#38; Execution</h1>
                    <p className='text-white w-3/4 md:w-2/4 m-auto text-sm'>Lorem ipsum dolor sit amet, consectetur 
                      adipiscing elit. A lorem pellentesque 
                      rhoncus vestibulum eros. Bibendum sed 
                      eget eu eu nunc. Magna mi, id viverra 
                      adipiscing nullam elementum. 
                      Dictumst aliquam enim integer accumsan.</p>
                  </div>

                  <div className='absolute top-full pt-4 md:pt-0 md:top-3/4'>
                    <div className='flex flex-col md:flex-row gap-8 bg-white md:w-4/5 m-auto p-12 rounded-xl'>
                      <div className='flex flex-col gap-4'>
                        <div><img src={goal} alt="" className='m-auto'/></div>
                        <div><h1 className='text-xl font-semibold'>Training Objectives</h1></div>
                        <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur 
                          adipiscing elit. A lorem pellentesque 
                          rhoncus vestibulum eros. Bibendum sed 
                          eget eu eu nunc. Magna mi, id viverra 
                          adipiscing nullam elementum. 
                          Dictumst aliquam enim integer accumsan.
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <div><img src={sales} alt="" className='m-auto'/></div>
                        <div><h1 className='text-xl font-semibold'>Outcomes</h1></div>
                        <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur 
                          adipiscing elit. A lorem pellentesque 
                          rhoncus vestibulum eros. Bibendum sed 
                          eget eu eu nunc. Magna mi, id viverra 
                          adipiscing nullam elementum. 
                          Dictumst aliquam enim integer accumsan.
                        </div>
                      </div>
                    </div>
                    <div className='pt-4'>
                      <div className='flex  flex-col md:flex-row gap-8 bg-white md:w-4/5 m-auto p-12 rounded-xl'>
                        <div className='md:w-1/2'>
                          <div><img src={cow} alt="" className='object-cover w-72'/></div>
                        </div>
                        <div className='flex flex-col gap-4'>
                          <div><h1 className='text-xl font-semibold'>Areas of interests</h1></div>
                          <div className='text-sm'>
                            <ul className="list-disc">
                              <li>Breeding in dairy animals</li>
                              <li>Rearing of youngstock</li>
                              <li>Livestock feeding</li>
                              <li>Forage production</li>
                              <li>Silage making</li>
                              <li>Milking and hygiene</li>
                              <li>Youghurt making</li>
                              <li>Cheese making</li>
                            </ul>
                          </div>
                          <div><Link to="/trainings-dashboard" className='explore-btn text-center'>Explore</Link></div>
                        </div>
                      </div>
                    </div>

                    <div className='pt-4'>
                      <div className='flex flex-col-reverse md:flex-row gap-8 bg-white md:w-4/5 m-auto p-12 rounded-xl'>
                        <div className='flex flex-col gap-4'>
                          <div><h1 className='text-xl font-semibold'>Research, Consultancy &#38; innovation</h1></div>
                          <div className='text-sm'>
                            <ul className="list-disc">
                              <li>Dairy product development</li>
                              <li>Fabrication of small dairy equipment</li>
                              <li>Dairy farm management</li>
                              <li>Dairy processing</li>
                              <li>Dairy waste management</li>
                            </ul>
                          </div>
                          <div><Link to="/training" className='explore-btn text-center'>Explore</Link></div>
                        </div>
                        <div className='md:w-1/2'>
                          <div><img src={consultants} alt="" className='object-cover w-full'/></div>
                        </div>
                      </div>
                    </div>

                    <div className='pt-4'>
                      <div className='flex  flex-col md:flex-row gap-8 bg-white md:w-4/5 m-auto p-12 rounded-xl'>
                        <div className='md:w-1/2'>
                          <div><img src={products} alt="" className='object-cover w-72'/></div>
                        </div>
                        <div className='flex flex-col gap-4'>
                          <div><h1 className='text-xl font-semibold'>Services &#38; Products marketplace</h1></div>
                          <div className='text-sm'>
                            <ul className="list-disc">
                              <li>Pasterurization services</li>
                              <li>Laboratory tests for quality control</li>
                              <li>Dairy products</li>
                              <li>Dairy processing of raw materials and ingredients</li>
                              <li>Vet and A.I services.</li>
                              <li>Livestock feeds</li>
                            </ul>
                          </div>
                          <div><Link to="/marketplace" className='explore-btn text-center'>Explore</Link></div>
                        </div>
                      </div>
                    </div>
                    <Footer/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default React.memo(LandingPage);