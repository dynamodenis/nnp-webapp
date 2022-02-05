import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import Button from "../utils/Button";


function TrainerCourses() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Welcome, John Doe.
                <div className="text-sm link">
                You have currently uploaded the courses below.
                </div>
            </div>
        </div>
        <div className="md:w-1/2">
          <Link to="/trainer/courses/create"><Button type="button" class="bg-blue form-btn rounded-md text-white m-auto text-sm" title="Create a Course"/></Link>
            {/* <input type="text" className="border-radius-10 py-0.5 text-sm border-slate-300 text-slate-500" placeholder="Search a topic" /> */}
        </div>
      </div>

      <div className="flex sm:flex-row justify-between gap-2">
        <div>
          Filters
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
        <Link to="/training/:id">
          <div className="bg-white border-radius-10 min-height-20vh courses-card-1 p-1 md:p-4 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
              <div><AccessTimeIcon className="text-xs"/><span className="text-xs pl-2 text-slate-500">2021 05 11</span></div>
              <div className="text-base font-semibold">Sample Course A</div>
              <div><AccountBoxIcon className="text-xs text-slate-500"/><span className="text-xs pl-2">Trainer A</span></div>
              <div><button className="text-slate-500 text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Check Progress</button></div>
          </div>
        </Link>
        <div className="bg-white border-radius-10 min-height-20vh courses-card-2 p-1 md:p-4 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div><AccessTimeIcon className="text-xs"/><span className="text-xs pl-2 text-slate-500">2021 05 11</span></div>
            <div className="text-base font-semibold">Sample Course A</div>
            <div><AccountBoxIcon className="text-xs text-slate-500"/><span className="text-xs pl-2">Trainer A</span></div>
            <div><button className="text-slate-500 text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Check Progress</button></div>
        </div>
        <div className="bg-white border-radius-10 min-height-20vh courses-card-3 p-1 md:p-4 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div><AccessTimeIcon className="text-xs"/><span className="text-xs pl-2 text-slate-500">2021 05 11</span></div>
            <div className="text-base font-semibold">Sample Course A</div>
            <div><AccountBoxIcon className="text-xs text-slate-500"/><span className="text-xs pl-2">Trainer A</span></div>
            <div><button className="text-slate-500 text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Check Progress</button></div>
        </div>
        <div className="bg-white border-radius-10 min-height-20vh courses-card-1 p-1 md:p-4 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div><AccessTimeIcon className="text-xs"/><span className="text-xs pl-2 text-slate-500">2021 05 11</span></div>
            <div className="text-base font-semibold">Sample Course A</div>
            <div><AccountBoxIcon className="text-xs text-slate-500"/><span className="text-xs pl-2">Trainer A</span></div>
            <div><button className="text-slate-500 text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Check Progress</button></div>
        </div>
        <div className="bg-white border-radius-10 min-height-20vh courses-card-2 p-1 md:p-4 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div><AccessTimeIcon className="text-xs"/><span className="text-xs pl-2 text-slate-500">2021 05 11</span></div>
            <div className="text-base font-semibold">Sample Course A</div>
            <div><AccountBoxIcon className="text-xs text-slate-500"/><span className="text-xs pl-2">Trainer A</span></div>
            <div><button className="text-slate-500 text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Check Progress</button></div>
        </div>
        <div className="bg-white border-radius-10 min-height-20vh courses-card-3 p-1 md:p-4 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div><AccessTimeIcon className="text-xs"/><span className="text-xs pl-2 text-slate-500">2021 05 11</span></div>
            <div className="text-base font-semibold">Sample Course A</div>
            <div><AccountBoxIcon className="text-xs text-slate-500"/><span className="text-xs pl-2">Trainer A</span></div>
            <div><button className="text-slate-500 text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Check Progress</button></div>
        </div>
      </div>
    </div>
  );
}

export default TrainerCourses;
