import React,{useState} from "react";
import {withRouter} from 'react-router';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';


function CoursesDashboard(props) {
  const category_id = props.match.params.category_id
  const categories = [
    {id:"1", heading:"Pasteurization"},
    {id:"2", heading:"Feeding and rearing of youngstock"},
    {id:"3", heading:"Breeding in dairy animals"},
    {id:"4", heading:"Silage making"},
    {id:"5", heading:"Yoghurt and cheese production"},
    {id:"6", heading:"Livestock milking and hygiene"},
    {id:"7", heading:"Artificial insemination"},
  ]

  const current_heading = categories.filter(val => val.id === category_id)[0]

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Welcome to {current_heading.heading}.
                <div className="text-sm link">
                  Available trainings
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
        <Link to={`/trainings-dashboard/category/${category_id}/training/:training_id`}>
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
        </Link>
      </div>
    </div>
  );
}

export default withRouter(React.memo(CoursesDashboard));
