import React,{useEffect, useState} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@mui/icons-material/Add';

// Redux
import {connect} from 'react-redux';
import { loadTrainingCategory,loadTrainingTrainers } from "../../redux/actions/training";
import CreateCourses from "./CreateCourses";

function TrainerCourses(props) {
  const {loadTrainingCategory,loadTrainingTrainers} = props;
  const [modalIsOpen,setIsOpen] = useState(false);
  const [modalIsDeleteOpen,setIsDeleteOpen] = useState(false);
  const [edit, setEdit] = useState();
  const [modalIsEditOpen,setIsEditOpen] = useState(false);

  // Open Modal
  function openModal() {
    setIsOpen(true);
  }

  // edit function
  function editItem(row) {
    setIsEditOpen(true);
    setEdit(row);
  }

  // Delte user
  function deleteItem(row) {
    setIsDeleteOpen(true);
    setEdit(row);
  }
  useEffect(() => {
    setEdit(edit);
  }, [edit]);

  useEffect(() => {
    loadTrainingCategory();
    loadTrainingTrainers()
  },[])
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Welcome, John Doe.
                <div className="text-sm link">
                This are the current uploaded trainings below.
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/2">
          <button type="button" className="bg-blue add-user-btn rounded-md text-white text-sm" onClick={openModal}>
            Add Training
          </button>
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

      <CreateCourses modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

// get the state
const mapStateToProps = state =>({
  trainings:state.trainings.trainings,
  isLoading:state.trainings.isLoading,
  t_category:state.trainings.training_category,
  trainers:state.trainings.trainers
})

export default connect(mapStateToProps,{loadTrainingCategory,loadTrainingTrainers})(React.memo(TrainerCourses));
