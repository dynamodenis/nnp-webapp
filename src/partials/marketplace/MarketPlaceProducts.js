import React from "react";
import { Link } from 'react-router-dom';

import user from '../../images/rice.jpeg';


function MarketPlaceProducts() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Welcome, John Doe.
                <div className="text-sm link">
                  Below is a list of available goods and services by our vendors.
                </div>
            </div>
        </div>
      </div>

      <div className="flex sm:flex-row justify-between gap-2">
        <div>
          Filters
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
        <Link to="/training/:id">
          <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div className="flex flex-col rounded-md shadow-lg">
              <div>
                {/* <img src={user} alt="" className="h-40 w-full bg-cover bg-center"/> */}
                <div className="bg-cover bg-center h-52 w-full bg-no-repeat rounded-md" style={{backgroundImage: `url(${user})`}}></div>
              </div>
              <div className="p-2">
                <div className="text-md font-medium">Harry hay bails</div>
                <div className="text-sm font-medium">Ksh 12000</div>
                <div className="text-xs font-normal line-through">Ksh 1500</div>
              </div>
              <div className="flex flex-row justify-center gap-2 pb-4">
                <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">View</button></div>
                <div><button className="text-slate-500 text-xs edit-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Edit</button></div>
                <div><button className="text-slate-500 text-xs delete-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Delete</button></div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/training/:id">
          <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div className="flex flex-col rounded-md shadow-lg">
              <div>
                {/* <img src={user} alt="" className="h-40 w-full bg-cover bg-center"/> */}
                <div className="bg-cover bg-center h-52 w-full bg-no-repeat rounded-md" style={{backgroundImage: `url(${user})`}}></div>
              </div>
              <div className="p-2">
                <div className="text-md font-medium">Harry hay bails</div>
                <div className="text-sm font-medium">Ksh 12000</div>
                <div className="text-xs font-normal line-through">Ksh 1500</div>
              </div>
              <div className="flex flex-row justify-center gap-2 pb-4">
                <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">View</button></div>
                <div><button className="text-slate-500 text-xs edit-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Edit</button></div>
                <div><button className="text-slate-500 text-xs delete-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Delete</button></div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/training/:id">
          <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div className="flex flex-col rounded-md shadow-lg">
              <div>
                {/* <img src={user} alt="" className="h-40 w-full bg-cover bg-center"/> */}
                <div className="bg-cover bg-center h-52 w-full bg-no-repeat rounded-md" style={{backgroundImage: `url(${user})`}}></div>
              </div>
              <div className="p-2">
                <div className="text-md font-medium">Harry hay bails</div>
                <div className="text-sm font-medium">Ksh 12000</div>
                <div className="text-xs font-normal line-through">Ksh 1500</div>
              </div>
              <div className="flex flex-row justify-center gap-2 pb-4">
                <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">View</button></div>
                <div><button className="text-slate-500 text-xs edit-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Edit</button></div>
                <div><button className="text-slate-500 text-xs delete-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Delete</button></div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/training/:id">
          <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div className="flex flex-col rounded-md shadow-lg">
              <div>
                {/* <img src={user} alt="" className="h-40 w-full bg-cover bg-center"/> */}
                <div className="bg-cover bg-center h-52 w-full bg-no-repeat rounded-md" style={{backgroundImage: `url(${user})`}}></div>
              </div>
              <div className="p-2">
                <div className="text-md font-medium">Harry hay bails</div>
                <div className="text-sm font-medium">Ksh 12000</div>
                <div className="text-xs font-normal line-through">Ksh 1500</div>
              </div>
              <div className="flex flex-row justify-center gap-2 pb-4">
                <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">View</button></div>
                <div><button className="text-slate-500 text-xs edit-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Edit</button></div>
                <div><button className="text-slate-500 text-xs delete-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Delete</button></div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/training/:id">
          <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div className="flex flex-col rounded-md shadow-lg">
              <div>
                {/* <img src={user} alt="" className="h-40 w-full bg-cover bg-center"/> */}
                <div className="bg-cover bg-center h-52 w-full bg-no-repeat rounded-md" style={{backgroundImage: `url(${user})`}}></div>
              </div>
              <div className="p-2">
                <div className="text-md font-medium">Harry hay bails</div>
                <div className="text-sm font-medium">Ksh 12000</div>
                <div className="text-xs font-normal line-through">Ksh 1500</div>
              </div>
              <div className="flex flex-row justify-center gap-2 pb-4">
                <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">View</button></div>
                <div><button className="text-slate-500 text-xs edit-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Edit</button></div>
                <div><button className="text-slate-500 text-xs delete-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Delete</button></div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/training/:id">
          <div className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div className="flex flex-col rounded-md shadow-lg">
              <div>
                {/* <img src={user} alt="" className="h-40 w-full bg-cover bg-center"/> */}
                <div className="bg-cover bg-center h-52 w-full bg-no-repeat rounded-md" style={{backgroundImage: `url(${user})`}}></div>
              </div>
              <div className="p-2">
                <div className="text-md font-medium">Harry hay bails</div>
                <div className="text-sm font-medium">Ksh 12000</div>
                <div className="text-xs font-normal line-through">Ksh 1500</div>
              </div>
              <div className="flex flex-row justify-center gap-2 pb-4">
                <div><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">View</button></div>
                <div><button className="text-slate-500 text-xs edit-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Edit</button></div>
                <div><button className="text-slate-500 text-xs delete-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Delete</button></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(MarketPlaceProducts);