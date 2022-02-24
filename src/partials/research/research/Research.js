import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@mui/icons-material/Add";

// Redux
import { connect } from "react-redux";
import { loadTrainingCategory, loadTrainingTrainers, loadTrainings } from "../../../redux/actions/training";
// import CreateCourses from "./CreateCourses";
import CircularProgressLoader from "../../utils/CircularProgressLoader";
// import EditCourse from "./EditCourse";
// import DeleteCourse from "./DeleteCourse";

function Research(props) {
  let { loadTrainingCategory, loadTrainingTrainers, loadTrainings, user, trainings, isLoading, t_category, trainers } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsDeleteOpen, setIsDeleteOpen] = useState(false);
  const [edit, setEdit] = useState();
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [role, setRole] = useState("");
  const [trainingsList, setTrainingsList] = useState([]);
  // check if user is undefined
  if (user !== "undefined") {
    user = JSON.parse(user);
  } else {
    user = {};
  }

  const handleChangeRole = event => {
    isLoading = true;
    if(event.target.value){
      // console.log(event.target.value)
      const trainings_filtered = trainings?.filter(item => item.category === event.target.value)
      setTrainingsList(trainings_filtered)
      isLoading = false
    } else {
      setTrainingsList(trainings)
    }
    isLoading = false
    setRole(event.target.value);
  };

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
    // loadTrainingCategory();
    // loadTrainingTrainers();
    // loadTrainings();
  }, []);
  useEffect(() => {
    setTrainingsList(trainings)
  },[trainings])

  // Get training category
  function getCategory(cat){
    const category = t_category['t-category']?.filter(item => item.id === cat)
    if(category !== undefined){
      // console.log("category", category)
      return category[0]?.name || "";
    } else {
      return "";
    }
    
  }
  // get trainer
  function getTrainer(item_id){
    const trainer = trainers?.filter(item => item.id === item_id)
    return trainer[0]?.name
  }
  // console.log("trainings", trainings);
  // console.log("category", t_category);
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
          <div className="text-2xl font-medium">
            Welcome, {user?.name}.<div className="text-sm link">This are the current uploaded researches done below.</div>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-between md:w-2/4">
          <div className="w-full">
            <button type="button" className="bg-blue add-user-btn rounded-md text-white text-sm md:w-full" onClick={openModal}>
              Add Product
            </button>
          </div>
          <div className="w-full">
            <Link to="/research/category"><button type="button" className="bg-blue add-user-btn rounded-md text-white text-sm md:w-full" onClick={openModal}>
              Research categories
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row justify-between gap-2 pt-2">
        <div className="font-semibold text-xs">
          <label htmlFor="" className="font-semibold text-sm">Filter by category</label>
          <div>
            <select
              className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md text-xs h-8"
              value={role}
              onChange={handleChangeRole}
              required
            >
              <option value="">Select All</option>
              {t_category['t-category']?.map((cat, i) => (
                <option key={i} value={cat.id} className="h-2">{cat.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {isLoading ? (
        <CircularProgressLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          {trainingsList.map((training, index) => (
            
              <div key={index} className={`bg-white border-radius-10 min-height-20vh ${index % 2 === 0 ? 'courses-card-2' :'courses-card-1'}  p-1 md:p-4 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300`}>
                <div className="grid grid-cols-2 justify-between">
                  <div className="font-medium">
                    <AccessTimeIcon className="text-xs" style={{fontSize:"20px"}} />
                    <span className="text-xs pl-2 text-slate-500">Duration {training.duration} Min</span>
                  </div>
                  <div className="font-medium">
                    <CategoryIcon className="text-xs" style={{fontSize:"20px"}} />
                    <span className="text-xs pl-2 text-slate-500">{getCategory(training.category)}</span>
                  </div>

                </div>
                <div className="text-lg font-semibold pt-2">Sample Course A</div>
                <div className="pt-2 flex flex-row justify-start pb-2">
                  <AccountBoxIcon className="text-xs text-slate-500" />
                  <div>
                    {training.trainers?.trainers?.map((trainer, index) => (
                      <span className="text-xs pl-2" key={index}>{getTrainer(trainer)}{(training.trainers?.trainers?.length > 1) ? "," :""}</span>
                    ))}
                  </div>
                </div>
                <div>
                <div className="flex flex-row justify-center gap-2 pb-2 pt-2">
                  <div><Link to={`/trainings-dashboard/category/${training.category}/training/${training.id}`}><button className="text-slate-500 text-xs view-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">View</button></Link></div>
                  <div><button className="text-slate-500 text-xs edit-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={() => editItem(training)} >Edit</button></div>
                  <div><button className="text-slate-500 text-xs delete-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={()=>deleteItem(training)} >Delete</button></div>
                </div>
                </div>
              </div>
            
          ))}
        </div>
      )}

      {/* <CreateCourses modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <EditCourse edit={edit} modalIsOpen={modalIsEditOpen} setIsOpen={setIsEditOpen} />
      <DeleteCourse edit={edit} modalIsOpen={modalIsDeleteOpen} setIsOpen={setIsDeleteOpen} /> */}
    </div>
  );
}

// get the state
const mapStateToProps = state => ({
  trainings: state.trainings.trainings,
  isLoading: state.trainings.isLoading,
  t_category: state.trainings.training_category,
  trainers: state.trainings.trainers,
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadTrainingCategory, loadTrainingTrainers, loadTrainings })(React.memo(Research));
