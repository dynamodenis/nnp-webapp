import React from "react";
import { Link } from 'react-router-dom';

import training_dash from '../../images/training-dashboard.png'
import pasturisation from '../../images/pestaurization.jpg'
import feeding from '../../images/feeding.svg'
import breeding from '../../images/breeding.jpeg'
import silage from '../../images/silage.jpg'
import youghurt from '../../images/yoghurt.jpeg'
import hygiene from '../../images/hygiene.jpg'
import insemination from '../../images/insemination.jpg'

function CoursesHomePage() {
  return (
    <div>
      <div className="flex flex-col justify-between gap-2">
        <div className="relative">
            <div>
                <img src={training_dash} alt="" className='h-60vh md:h-auto border-radius-10' />
            </div>
            <div className='absolute top-16'>
            <h1 className='text-white w-3/4 md:w-2/4 m-auto text-2xl font-semibold'>Attend and learn from our experienced trainers.</h1>
            {/* <p className='text-white w-3/4 md:w-2/4 m-auto text-sm'>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. A lorem pellentesque 
                rhoncus vestibulum eros. Bibendum sed 
                eget eu eu nunc. Magna mi, id viverra 
                adipiscing nullam elementum. 
                Dictumst aliquam enim integer accumsan.</p> */}
            </div>
            <div className='absolute left-8 md:left-2/3 top-3/4'>
                <input type="text" className="border-radius-10 py-0.5 text-sm border-slate-300 text-slate-500 md:bottom-0 md:right-0 m-auto" placeholder="Search a topic" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          <Link to="/trainings-dashboard/category/1">
            <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
              <div className="flex flex-col rounded-md shadow-lg">
                <div>
                  {/* <img src={pasturisation} alt="" className="h-40 w-full bg-cover bg-center"/> */}
                  <div className="bg-contain bg-center h-72 w-full bg-no-repeat rounded-md" style={{backgroundImage: `url(${pasturisation})`}}></div>
                </div>
                <div className="p-2">
                  <div className="text-xl font-semibold">Pasteurization</div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">About this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">Who is elgible for this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-2 pb-4">
                <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Visit training</button></div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/trainings-dashboard/category/2">
            <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
              <div className="flex flex-col rounded-md shadow-lg">
                <div>
                  <div className="bg-cover bg-center h-72 w-full bg-no-repeat" style={{backgroundImage: `url(${feeding})`}}></div>
                </div>
                <div className="p-2">
                  <div className="text-xl font-semibold">Feeding and rearing of youngstock</div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">About this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">Who is elgible for this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-2 pb-4">
                  <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Visit training</button></div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/trainings-dashboard/category/3">
            <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
              <div className="flex flex-col rounded-md shadow-lg">
                <div>
                  <div className="bg-cover bg-center h-72 w-full bg-no-repeat" style={{backgroundImage: `url(${breeding})`}}></div>
                </div>
                <div className="p-2">
                  <div className="text-xl font-semibold">Breeding in dairy animals</div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">About this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">Who is elgible for this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-2 pb-4">
                  <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Visit training</button></div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/trainings-dashboard/category/4">
            <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
              <div className="flex flex-col rounded-md shadow-lg">
                <div>
                  <div className="bg-cover bg-center h-72 w-full bg-no-repeat" style={{backgroundImage: `url(${silage})`}}></div>
                </div>
                <div className="p-2">
                  <div className="text-xl font-semibold">Silage making</div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">About this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">Who is elgible for this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-2 pb-4">
                  <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Visit training</button></div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/trainings-dashboard/category/5">
            <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
              <div className="flex flex-col rounded-md shadow-lg">
                <div>
                  <div className="bg-cover bg-center h-72 w-full bg-no-repeat" style={{backgroundImage: `url(${youghurt})`}}></div>
                </div>
                <div className="p-2">
                  <div className="text-xl font-semibold">Yoghurt and cheese production</div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">About this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">Who is elgible for this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-2 pb-4">
                  <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Visit training</button></div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/trainings-dashboard/category/6">
            <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
              <div className="flex flex-col rounded-md shadow-lg">
                <div>
                  <div className="bg-cover bg-center h-72 w-full bg-no-repeat" style={{backgroundImage: `url(${hygiene})`}}></div>
                </div>
                <div className="p-2">
                  <div className="text-xl font-semibold">Livestock milking and hygiene</div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">About this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">Who is elgible for this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-2 pb-4">
                  <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Visit training</button></div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/trainings-dashboard/category/7">
            <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
              <div className="flex flex-col rounded-md shadow-lg">
                <div>
                  <div className="bg-cover bg-center h-72 w-full bg-no-repeat" style={{backgroundImage: `url(${insemination})`}}></div>
                </div>
                <div className="p-2">
                  <div className="text-xl font-semibold">Artificial insemination</div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">About this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                  <div className="pt-4">
                    <div className="text-md font-medium underline">Who is elgible for this training.</div>
                    <p className='font-normal text-xs'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. A lorem pellentesque 
                    rhoncus vestibulum eros. Bibendum sed 
                    eget eu eu nunc. Magna mi, id viverra 
                    adipiscing nullam elementum. 
                    Dictumst aliquam enim integer accumsan.</p> 
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-2 pb-4">
                  <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Visit training</button></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoursesHomePage;
