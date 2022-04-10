import React, { useEffect, useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ScienceIcon from '@mui/icons-material/Science';
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// Redux
import { connect } from "react-redux";
import CircularProgressLoader from "../../utils/CircularProgressLoader";
import { loadResearchCategory } from "../../../redux/actions/research_category";
import { loadResearches } from "../../../redux/actions/research";
import { loadTrainingTrainers } from "../../../redux/actions/training";
import CreateResearch from "./CreateResearch";
import NoDataFound from '../../utils/NoDataFound';
import DeleteResearch from "./DeleteResearch";
import EditResearch from './EditResearch';

import { canResearchCreate, canResearchEdit, canResearchDelete, canResearchView  } from '../../utils/Roles';

function Research(props) {
  let { loadResearchCategory, user, researches, isLoading, categories, trainers,loadResearches,loadTrainingTrainers } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsDeleteOpen, setIsDeleteOpen] = useState(false);
  const [edit, setEdit] = useState();
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [role, setRole] = useState("");
  const [researchesList, setResearchesList] = useState([]);
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
      const researches_filtered = researches?.filter(item => item.category === event.target.value)
      setResearchesList(researches_filtered)
      isLoading = false
    } else {
      setResearchesList(researches)
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
    loadResearchCategory();
    loadTrainingTrainers();
    loadResearches()
  }, []);

  useEffect(() => {
    setResearchesList(researches)
  },[researches])

  // Get research category
  function getCategory(cat){
    const category = categories?.filter(item => item.id === cat)
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
  // Get name of the research
  function getName(research){
    if(Object.keys(research).length){
      return research?.rMaterials[0]?.title
    } else {
      return "";
    }
  }
 
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
          <div className="text-2xl font-medium">
            Welcome, {user?.name}.<div className="text-sm link">This are the current uploaded researches done below.</div>
          </div>
        </div>
        {canResearchCreate(user) === true && 
          <div className="flex flex-row gap-4 justify-between md:justify-end md:w-1/2">
            <div className="">
              <button type="button" className="bg-blue add-user-btn  rounded-lg text-white text-sm" onClick={openModal}>
                <ScienceIcon fontSize="small" style={{ color:"white" }}/>
                <span className="pt-0.5">
                  Add Research
                </span>
              </button>
            </div>
            <div className="">
              <Link to="/research/category">
                <button type="button" className="bg-blue add-user-btn rounded-lg text-white text-sm">
                  <AddIcon fontSize="small" style={{ color:"white" }}/>
                  <span className="pt-0.5">
                    Research categories
                  </span>
                </button>
              </Link>
            </div>
          </div>
        }
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
              {categories?.map((cat, i) => (
                <option key={i} value={cat.id} className="h-2">{cat.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {isLoading ? (
        <CircularProgressLoader />
      ) : (
        <>
        <div className="pt-8">
          {researchesList.length === 0 && <NoDataFound/>  }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {researchesList.map((research, index) => (
            
              <div key={index} className={`bg-white border-radius-10 min-height-20vh ${index % 2 === 0 ? 'courses-card-2' :'courses-card-1'}  p-1 md:p-4 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300`}>
                <div className="grid grid-cols-2 justify-between">
                  <div className="font-medium">
                    <CategoryIcon className="text-xs" style={{fontSize:"20px"}} />
                    <span className="text-xs pl-2 text-slate-500">{getCategory(research.category)}</span>
                  </div>

                </div>
                <div className="text-lg font-semibold pt-4">{getName(research)}</div>
                <div className="pt-2 flex flex-row justify-start pb-2">
                  <AccountBoxIcon className="text-xs text-slate-500" />
                  <div>
                    {research.trainers?.trainers?.map((trainer, index) => (
                      <span className="text-xs pl-2" key={index}>{getTrainer(trainer)}{(research.trainers?.trainers?.length > 1) ? "," :""}</span>
                    ))}
                  </div>
                </div>
                <div>
                <div className="flex flex-row justify-center gap-2 pb-2 pt-2">
                  {canResearchView(user) === true && 
                    <div>
                      <Link to={`/research/details/category/${research.category}/research/${research.id}`}>
                        <button className="text-slate-500 text-xs view-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">
                          <VisibilityIcon fontSize="small" style={{fontSize:"20px",paddingRight:"5px" }}/>
                          <span className="pl-1">
                            View
                          </span>
                        </button>
                      </Link>
                    </div>
                  }
                  {canResearchEdit(user) === true && 
                    <div>
                      <button className="text-slate-500 text-xs edit-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={() => editItem(research)} >
                        <EditIcon fontSize="small" style={{fontSize:"20px",paddingRight:"5px" }}/>
                        <span className="pl-1">
                          Edit
                        </span>
                      </button>
                    </div>
                  }
                  {canResearchDelete(user) === true && 
                    <div>
                      <button className="text-slate-500 text-xs delete-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={()=>deleteItem(research)} >
                        <DeleteIcon fontSize="small" style={{fontSize:"20px",paddingRight:"5px" }}/>
                        <span className="pl-1">
                          Delete
                        </span>
                      </button>
                    </div>
                  }
                </div>
                </div>
              </div>
            
          ))}
        </div>
        </>
      )}
      <CreateResearch modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <DeleteResearch edit={edit} modalIsOpen={modalIsDeleteOpen} setIsOpen={setIsDeleteOpen} />
      <EditResearch edit={edit} modalIsOpen={modalIsEditOpen} setIsOpen={setIsEditOpen} />
    </div>
  );
}

// get the state
const mapStateToProps = state => ({
  researches: state.research.researches,
  isLoading: state.research.isLoading,
  categories: state.research_category.research_categories,
  trainers: state.trainings.trainers,
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadResearchCategory, loadResearches,loadTrainingTrainers })(React.memo(Research));
