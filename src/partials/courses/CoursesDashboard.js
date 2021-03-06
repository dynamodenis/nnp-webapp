import React,{useState, useEffect} from "react";
import {withRouter} from 'react-router';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import CategoryIcon from '@mui/icons-material/Category';

// redux
import { connect } from "react-redux";
import { loadTrainingCategory } from "../../redux/actions/training_category";
import { loadTrainingsByCategory,loadTrainingTrainers } from "../../redux/actions/training";
import CircularProgressLoader from "../utils/CircularProgressLoader";
import NoDataFound from '../utils/NoDataFound';
function CoursesDashboard(props) {
  let {categories, loadTrainingCategory, loadTrainingsByCategory,filtered_trainings,loadTrainingTrainers,isLoadingCategories,trainers,isLoading} = props;
  const category_id = props.match.params.category_id
  const [category_name, setCategoryName] = useState("")

  let history = useHistory();
  const goToPreviousPath = () => {
      history.goBack()
  }
  useEffect(() => {
    loadTrainingCategory()
    loadTrainingsByCategory(category_id)
    loadTrainingTrainers()
  },[])

  useEffect(() => {
    const category = categories?.filter(cat => cat.id === category_id)
    setCategoryName(category[0]?.name)
  },[category_id])

  // Get training category
  function getCategory(cat){
    const category = categories?.filter(item => item.id === cat)
    if(category !== undefined){
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
  function truncate(desc){
    return desc.length > 300 ? desc.substring(0, 299) + "..." : desc;
  }

  return (
    <div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Welcome to {category_name}.
                <div className="text-sm primary-green font-bold">
                  Available trainings
                </div>
            </div>
        </div>
        <div className="w-20 float-right ">
          <button type="button" className="bg-primary-gray cancel-btn rounded-lg text-white text-sm" onClick={goToPreviousPath}>
            <ArrowBackIcon fontSize="small" style={{ color:"white" }}/>
            <span className="pt-0.5 pl-0.5">
                Back
            </span>
          </button>
        </div>
      </div>

      <div className="flex sm:flex-row justify-between gap-2">
        <div>
          {/* Filters */}
        </div>
      </div>
      {isLoading ? (
          <CircularProgressLoader/>
        ) : (
      <div className="flex flex-col gap-4 pt-8">
        {filtered_trainings.length === 0 && <NoDataFound header="No Trainings Found" body="Trainings with this category are currently not available"/> }
        {filtered_trainings?.map((training,index) => (
          <Link to={`/trainings-dashboard/category/${category_id}/training/${training.id}`} key={index}>
            <div key={index} className="bg-white border-radius-10 min-height-20vh border-training-card" >
              <div className="flex flex-col md:grid md:grid-cols-2 justify-start px-4 py-4 gap-8">
                <div className="flex flex-col gap-2">
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
                  <div className="text-base font-semibold">{training.topic}</div>
                  <div className="pt-2 flex flex-row justify-start pb-2">
                    <AccountBoxIcon className="text-xs text-slate-500" />
                    <div>
                      {training.trainers?.trainers?.map((trainer, index) => (
                        <span className="text-xs pl-2 primary-green font-semibold" key={index}>{getTrainer(trainer)}{(training.trainers?.trainers?.length > 1) ? "," :""}</span>
                      ))}
                    </div>
                  </div>
                  <div><button className="text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold hover:bg-primary-green ease-in-out duration-300">Visit training</button></div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">
                     {truncate(training.description)}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      )}
    </div>
  );
}
// get the state
const mapStateToProps = state =>({
  categories:state.training_category.training_categories,
  filtered_trainings: state.trainings.filtered_trainings,
  isLoading: state.trainings.isLoading,
  trainers: state.trainings.trainers,
  isLoadingCategories:state.training_category.isLoading,
})
export default connect(mapStateToProps,{loadTrainingCategory,loadTrainingsByCategory,loadTrainingTrainers})(withRouter(React.memo(CoursesDashboard)));
