import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import wallpaper from '../../images/wallpaper.png'
import goal from '../../images/goal.svg'
import sales from '../../images/sales.svg'
import cow from '../../images/cow.svg'
import consultants from '../../images/consultants.svg'
import products from '../../images/green-market.jpeg'
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
                  <div className='absolute top-6'>
                    <h1 className='text-white w-3/4 md:w-2/4 m-auto text-2xl font-semibold'>Services Offered</h1>
                    <p className='text-white w-3/4 md:w-2/4 m-auto text-sm'>
                    NNP partnered with
                    consortium of three Canadian partners led by Cegep Saint-Jean-Sur-Richelieu and was able to
                    establish a dairy processing plant with state of the art processing and laboratory equipment.
                    This has enabled us provide different services to dairy farmers and businesses in the food processing, agro environment, biotechnology, and agronomy sectors by
                    providing innovation and technology transfer support services.
                    </p>
                  </div>

                  <div className='absolute top-full pt-4 md:pt-0 md:top-3/4'>
                    <div className='flex flex-col md:flex-row gap-8 bg-white md:w-4/5 m-auto p-12 rounded-xl'>
                      <div className='flex flex-col gap-4'>
                        <div><img src={goal} alt="" className='m-auto'/></div>
                        <div><h1 className='text-xl font-semibold text-gray-600'>Objectives</h1></div>
                        <div className='text-sm'>
                        The Big Four Agenda is the country’s major transformation blueprint being implemented within several years
                        from 2017. Government seeks to enhance manufacturing contribution to GDP from 9.2 % to 20 % by
                        2022 through investment in core areas such as, agro-processing among other sectors. Enablers for this sector
                        include investment in SME’s development interventions and improved market access.
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <div><img src={sales} alt="" className='m-auto'/></div>
                        <div><h1 className='text-xl font-semibold text-gray-600'>Outcomes</h1></div>
                        <div className='text-sm'>Innovations in manufacturing technology and product developments
                        enhance the value chain thereby upgrading products and enhancing global competitiveness of the sector. In
                        addition, technology transfer will make production faster, simpler and more efficient for our manufacturing
                        industries thus raising the manufacturing sector share to GDP.
                        </div>
                      </div>
                    </div>
                    <div className='pt-4'>
                      <div className='flex  flex-col md:flex-row gap-8 bg-white md:w-4/5 m-auto p-12 rounded-xl'>
                        <div className='md:w-1/2'>
                          <div><img src={cow} alt="" className='object-cover w-72'/></div>
                        </div>
                        <div className='flex flex-col gap-4'>
                          <div><h1 className='text-xl font-semibold text-gray-600'>Areas of interests</h1></div>
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
                          <div><h1 className='text-xl font-semibold text-gray-600'>Research, Consultancy &#38; innovation</h1></div>
                          <div className='text-sm'>
                            <ul className="list-disc">
                              <li>Dairy product development</li>
                              <li>Fabrication of small dairy equipment</li>
                              <li>Dairy farm management</li>
                              <li>Dairy processing</li>
                              <li>Dairy waste management</li>
                            </ul>
                          </div>
                          <div><Link to="/research" className='explore-btn text-center'>Explore</Link></div>
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
                          <div><h1 className='text-xl font-semibold text-gray-600'>Services &#38; Products marketplace</h1></div>
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
                    <div className='pt-4'>
                      <Footer/>
                    </div>
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