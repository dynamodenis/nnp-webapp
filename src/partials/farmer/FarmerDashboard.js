import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


function FarmerDashboard() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Welcome, Farmer.
                <div className="text-sm link">
                  Enrolled and active classes
                </div>
            </div>
        </div>
        <div>
            <input type="text" className="border-radius-10 py-0.5 text-sm border-slate-300 text-slate-500" placeholder="Search a topic" />
        </div>
      </div>

      <div className="flex sm:flex-row justify-between gap-2">
        <div>
          Filters
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-8">
        <div className="bg-white border-radius-10 min-height-20vh border-training-card">
          <div className="flex flex-col md:flex-row px-4 py-4 gap-8">
            <div className="flex flex-col gap-2 width-55">
              <div><AccessTimeIcon className="text-xs"/><span className="text-xs pl-2">2021 05 11</span></div>
              <div className="text-base font-semibold">Sample Course A</div>
              <div><AccountBoxIcon className="text-xs"/><span className="text-xs pl-2">Trainer A</span></div>
              <div><button className="text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Check Progress</button></div>
            </div>
            <div>
              <div className="text-sm text-slate-500">
                Nunc id turpis eget magna fringilla accumsan. 
                Cras sit amet odio urna. Fusce convallis nibh velit, 
                a cursus tellus porta nec. Nam vulputate elementum 
                tortor in interdum. Maecenas nec placerat nisl. 
                Nunc quis ante semper, venenatis mi ut, 
                semper tellus. Nunc venenatis nisi non libero semper, 
                vitae porta eros hendrerit. 

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;
