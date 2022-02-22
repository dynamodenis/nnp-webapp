import React,{useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@mui/icons-material/Add';

import training_dash from '../../images/training-dashboard.png'
import CreateTrainingCategory from "./createcourse/CreateTrainingCategory";

// reduct
import {connect} from 'react-redux'
import { loadTrainingCategory } from "../../redux/actions/training_category";
import EditTrainingCategory from "./createcourse/EditTrainingCategory";
import DeleteTrainingCategory from "./createcourse/DeleteTrainingCategory";
import CircularProgressLoader from "../utils/CircularProgressLoader";
function CoursesHomePage(props) {

  const {loadTrainingCategory, categories, isLoading} = props
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
    loadTrainingCategory()
  },[])

  function getImage(cat){
    let imageList = cat?.tCategoryResourcesList
    let image = ""
    if(imageList?.length){
      image = `data:image/png;base64,${imageList[0]?.imageDownload}`
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

        <div className="flex flex-col-reverse md:flex-row justify-end">

            <div className="w-full md:w-1/2">
                <button type="button" className="bg-blue add-user-btn rounded-md text-white text-sm" onClick={openModal}>
                    <IconButton style={{ padding: 1.5, color:"white" }} className="text-white">
                        <AddIcon fontSize="small"/>
                    </IconButton>
                    Add Training Category
                </button>
            </div>
        </div>
        {isLoading ? (
          <CircularProgressLoader/>
        ) : (
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
                  <div className="flex flex-row justify-center gap-2 pb-4">
                    <div><Link to={`/trainings-dashboard/category/${category.id}`}><button className="text-slate-500 text-xs view-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">View</button></Link></div>
                    <div><button className="text-slate-500 text-xs edit-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={() => editItem(category)} >Edit</button></div>
                    <div><button className="text-slate-500 text-xs delete-button pl-4 pr-4 md:pr-8 md:pl-8 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={()=>deleteItem(category)} >Delete</button></div>
                  </div>
                </div>
              </div>
          ))}
        </div>
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
})

export default connect(mapStateToProps, {loadTrainingCategory})(React.memo(CoursesHomePage))
