import React from "react";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
// import MessageIcon from '@mui/icons-material/Message';
import trainer from '../../images/default.jpg';


function Consultancy() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Consulants List
                <div className="text-sm link">
                  These are all available consultants.
                </div>
            </div>
        </div>
        <div>
            <input type="text" className="border-radius-10 py-0.5 text-sm border-slate-300 text-slate-500" placeholder="Search a consultant" />
        </div>
      </div>

      {/* <div className="flex sm:flex-row justify-between gap-2">
        <div>
          Filters
        </div>
      </div> */}
      <div className="flex flex-col gap-4 pt-8">
        <div className="bg-white border-radius-10 min-height-20vh border-training-card">
          <div className="flex flex-col md:flex-row px-4 py-4 gap-8">
            <div className="flex flex-col gap-2 width-55">
              <div className="flex flex-row gap-2">
                <div><span className="text-slate-500 text-xs edit-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Active</span></div>
                <div className="text-xs pt-1">08:00 am - 16:00 pm</div>
              </div>
                <div className="flex flex-row gap-4 pt-2 pb-3">
                    <img src={trainer} alt="" className="w-10 border-radius-50" />
                    <div className="text-sm pl-1 pt-3 font-semibold green">Grace Migwi</div>
                </div>
              <div></div>
              <div><button className="text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">Visit consultant</button></div>
            </div>
            <div>
              <div className="text-xs text-slate-500">
                Nunc id turpis eget magna fringilla accumsan. 
                Cras sit amet odio urna. Fusce convallis nibh velit, 
                a cursus tellus porta nec. Nam vulputate elementum 
                tortor in interdum. Maecenas nec placerat nisl. 
                Nunc quis ante semper, venenatis mi ut, 
                semper tellus. Nunc venenatis nisi non libero semper, 
                vitae porta eros hendrerit. 

              </div>
            </div>
            <div className="flex flex-row gap-2 ">
                <a title="Call number" href="tel:0758818394">
                    <CallIcon className="hover:text-gray-900 cursor-pointer"/>
                </a>
                <a href="mailto: insertemailhere@xyz.com?subject=Mail from xyz.com" target="_blank" title="Send Email">
                    <EmailIcon className="hover:text-gray-900 cursor-pointer"/>
                </a>
                {/* <div>
                    <CallIcon/>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultancy;
