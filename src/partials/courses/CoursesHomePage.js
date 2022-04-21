import React,{useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import training_dash from '../../images/training-dashboard.png'
import CreateTrainingCategory from "./createcourse/CreateTrainingCategory";

// reduct
import {connect} from 'react-redux'
import { loadTrainingCategory } from "../../redux/actions/training_category";
import EditTrainingCategory from "./createcourse/EditTrainingCategory";
import DeleteTrainingCategory from "./createcourse/DeleteTrainingCategory";
import CircularProgressLoader from "../utils/CircularProgressLoader";
import NoDataFound from '../utils/NoDataFound';
import { canTrainingCreate, canTrainingEdit, canTrainingDelete  } from '../utils/Roles';
function CoursesHomePage(props) {

  const {loadTrainingCategory, categories, isLoading} = props
  let {user} = props;
  const [modalIsOpen,setIsOpen] = useState(false);
  const [modalIsDeleteOpen,setIsDeleteOpen] = useState(false);
  const [edit, setEdit] = useState();
  const [modalIsEditOpen,setIsEditOpen] = useState(false);

  // Open Modal
  function openModal() {
    setIsOpen(true);
  }

  // check if user is undefined
  if (user !== 'undefined') {
    user = JSON.parse(user);
  } else {
    user = {}
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
    loadTrainingCategory()
  },[])

  function getImage(cat){
    let imageList = cat?.imageDownloads
    let image = ""
    if(imageList){
      image = `data:image/png;base64,${imageList}`
    }
    return image
  }
  
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
        
        {/* Can create */}
        {canTrainingCreate(user) ===  true &&
          <div className="flex flex-col-reverse md:flex-row justify-end">
              <div className="w-full md:w-1/2">
                  <button type="button" className="bg-primary-green add-user-btn rounded-md text-white text-sm font-bold" onClick={openModal}>
                    <AddIcon fontSize="small" style={{ color:"white" }}/>
                    <span className="pt-0.5">
                      Add Training Category
                    </span>
                  </button>
              </div>
          </div>
        }

        {isLoading ? (
          <CircularProgressLoader/>
        ) : (
          <>
            <div className="pt-8">
              {categories.length === 0 && <NoDataFound header="No Training Categories Found" body="Training categories are currently not available."/>  }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {categories.map((category, index) => (
                
                  <div key={index} className="bg-white border-radius-10 min-height-20vh shadow-lg cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
                    <div className="flex flex-col rounded-md ">
                      <div>
                        {/* <img src={pasturisation} alt="" className="h-40 w-full bg-cover bg-center"/> */}
                        <div className="bg-contain bg-center h-72 w-full bg-no-repeat rounded-md" style={{backgroundImage: `url(${getImage(category)})`}}></div>
                      </div>
                      <div className="p-2">
                        <div className="text-xl font-semibold">{category.name}</div>
                        <div className="pt-4">
                          <div className="text-md font-medium underline">About this training.</div>
                          <p className='font-normal text-xs'>{category.descr}</p> 
                        </div>
                        <div className="pt-4">
                          <div className="text-md font-medium underline">Who is elgible for this training.</div>
                          <p className='font-normal text-xs'>{category.eligible}</p> 
                        </div>
                      </div>
                      
                      <div className="flex flex-row justify-center gap-2 pb-2 pt-2">
                        <div>
                          <Link to={`/trainings-dashboard/category/${category.id}`}>
                            <button className="text-slate-500 text-xs view-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">
                              <VisibilityIcon fontSize="small" style={{fontSize:"20px",paddingRight:"5px" }}/>
                              <span className="pl-1">
                                View
                              </span>
                            </button>
                          </Link>
                        </div>
                        {canTrainingEdit(user) ===  true &&
                          <div>
                            <button className="text-slate-500 text-xs edit-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={() => editItem(category)} >
                              <EditIcon fontSize="small" style={{fontSize:"20px",paddingRight:"5px" }}/>
                              <span className="pl-1">
                                Edit
                              </span>
                            </button>
                          </div>
                        }
                        {canTrainingDelete(user) ===  true &&
                          <div>
                            <button className="text-slate-500 text-xs delete-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={()=>deleteItem(category)} >
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
      </div>
      <CreateTrainingCategory modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
      <EditTrainingCategory edit={edit} modalIsOpen={modalIsEditOpen} setIsOpen={setIsEditOpen}/>
      <DeleteTrainingCategory edit={edit} modalIsOpen={modalIsDeleteOpen} setIsOpen={setIsDeleteOpen}  />
    </div>
  );
}

// get the state
const mapStateToProps = state =>({
  isLoading:state.training_category.isLoading,
  categories:state.training_category.training_categories,
  user: state.auth.user,
})

export default connect(mapStateToProps, {loadTrainingCategory})(React.memo(CoursesHomePage))
