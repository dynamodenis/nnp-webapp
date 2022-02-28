import React, { useEffect } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import trainer_image from "../../../images/default.jpg";
import { withRouter } from "react-router";
import ReactPlayer from "react-player/lazy";
import { useHistory } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { loadResearch } from "../../../redux/actions/research";
import { loadResearchCategory } from "../../../redux/actions/research_category";
import { loadTrainingTrainers } from "../../../redux/actions/training";
import CircularProgressLoader from "../../utils/CircularProgressLoader";

function ResearchDetails(props) {
  const research_id = props.match.params.research_id;
  const { loadResearch, isLoading, research, categories, trainers, loadResearchCategory, loadTrainingTrainers } = props;

  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  useEffect(() => {
    loadResearch(research_id);
    loadResearchCategory();
    loadTrainingTrainers();
  }, [research_id]);
  console.log(research_id);
  //   console.log(research);

  // get trainer
  function getTrainer(items) {
    let names = [];
    items?.map(item_id => {
      const trainer = trainers?.filter(item => item.id === item_id);
      names.push(trainer[0]?.name);
    });
    return names.join(", ");
  }

  function createMarkup(content) {
    return { __html: content };
  }
  // getTrainer name
  function getTrainerName(trainer_id) {
    const trainer = trainers?.filter(item => item.id === trainer_id);
    // console.log(trainer)
    return trainer[0]?.name;
  }
  // video url
  function getVideoUrl(research) {
    if (Object.keys(research).length) {
      return research?.rMaterials[0]?.url;
    } else {
      return "";
    }
  }
  // Get research category
  function getCategory(cat) {
    const category = categories?.filter(item => item.id === cat);
    if (category !== undefined) {
      // console.log("category", category)
      return category[0]?.name || "";
    } else {
      return "";
    }
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
    <>
      {isLoading ? (
        <CircularProgressLoader />
      ) : (
        <div>
          <div className="flex flex-row justify-between gap-2 pb-2">
            <div>
              <div className="text-sm md:text-xl font-medium">
                Welcome to Sample Course by <span className="link">{getTrainer(research.trainers?.trainers)}</span>
              </div>
            </div>
            <div className="w-20 md:float-right ">
              <button type="button" className="bg-blue success-btn rounded-md text-white text-sm" onClick={goToPreviousPath}>
                Back
              </button>
            </div>
          </div>

          <div className="player-wrapper">
            {/* <div className="justify-center border-radius-10 min-height-50 h-full p-1 md:p-4 md:w-2/4" style={{width:"100px",height: '10%'}}> */}
            <ReactPlayer url={getVideoUrl(research)} width="100%" height="100%" className="react-player" />
            {/* </div> */}
          </div>
          <div className="flex flex-col  gap-4 pt-8 justify-between">
            <div className="bg-white border-radius-10 min-height-20vh courses-card-3 p-4 overflow-y-auto h-74">
              <div className="font-medium">
                <CategoryIcon className="text-xs" style={{ fontSize: "20px" }} />
                <span className="text-xs pl-2 text-slate-500">{getCategory(research.category)}</span>
              </div>
              <p className="font-semibold text-sm text-slate-600 pt-4">Meet your researcher(s)</p>
              <div>
                {research.trainers?.trainers?.map((trainer, index) => (
                  <span key={index}>
                    <div className="flex flex-row gap-8 pt-2 pb-3">
                      <img src={trainer_image} alt="" className="w-10 h-10 border-radius-50" />
                      <div className="text-sm pl-2 pt-4 font-semibold green">{getTrainerName(trainer)}</div>
                    </div>
                  </span>
                ))}
              </div>
              <div className="text-base font-semibold pt-4">{getName(research)}</div>
              <p className="text-xs text-slate-500 pt-2 pb-4" dangerouslySetInnerHTML={createMarkup(research.description)}></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// get the state
const mapStateToProps = state => ({
  research: state.research.research,
  isLoading: state.research.isLoading,
  categories: state.research_category.research_categories,
  trainers: state.trainings.trainers,
});

export default connect(mapStateToProps, { loadResearch, loadResearchCategory, loadTrainingTrainers })(
  withRouter(React.memo(ResearchDetails))
);
