import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import trainer from '../../images/default.jpg';


function CourseDetails() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Welcome to Sample Course by Trainer B
            </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row  gap-4 pt-8 justify-between">
        <div className="bg-white border-radius-10 min-height-20vh courses-card-3 p-1 md:p-4 md:w-2/4">
            <div><AccessTimeIcon className="text-xs"/><span className="text-xs pl-2 text-slate-500">2021 05 11</span></div>
            <div className="text-base font-semibold">Sample Course A</div>
            <p className="text-xs text-slate-500 pt-2 pb-4">Nunc id turpis eget magna fringilla accumsan. 
                Cras sit amet odio urna. Fusce convallis nibh velit, 
                a cursus tellus porta nec. Nam vulputate elementum 
                tortor in interdum. Maecenas nec placerat nisl. 
                Nunc quis ante semper, venenatis mi ut, 
                semper tellus. Nunc venenatis nisi non libero semper, 
                vitae porta eros hendrerit. 
            </p>
            <p className="font-semibold text-sm text-slate-600">Meet your trainer</p>
            <div className="flex flex-row gap-8 pt-2 pb-3">
                <img src={trainer} alt="" className="w-20 border-radius-50" />
                <div className="text-sm pl-2 pt-4 font-semibold green">Trainer A</div>
            </div>
            <div className="text-xs text-slate-500">
                Nunc venenatis nisi non libero semper, 
                vitae porta eros hendrerit. Nulla sed finibus sapien. 
                Nulla rhoncus odio vel ullamcorper vestibulum.

                text-xs text-slate-500
            </div>
        </div>
        <div className="bg-black border-radius-10 min-height-50 h-full p-1 md:p-4 md:w-2/4">
            
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
