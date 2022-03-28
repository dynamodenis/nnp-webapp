import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import trainer_image from "../../images/default.jpg";
import { withRouter } from "react-router";
import ReactPlayer from "react-player/lazy";
import { useHistory } from "react-router-dom";

import CircularProgressLoader from "../utils/CircularProgressLoader";

// redux
import { connect } from "react-redux";
import { loadTraining, loadTrainingTrainers } from "../../redux/actions/training";
import { loadSelectedImage } from "../../redux/actions/research";
import CourseImages from './CourseImages';

function CourseDetails(props) {
  const training_id = props.match.params.training_id;
  const { loadTraining, isLoading, training, t_category, trainers, loadTrainingTrainers,loadSelectedImage } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  useEffect(() => {
    console.log("this training");
    loadTraining(training_id);
    loadTrainingTrainers();
  }, []);

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
    return trainer[0]?.name;
  }
  // video url
  function getVideoUrl(training) {
    if (Object.keys(training).length) {
      return training?.tMaterials[0]?.url;
    } else {
      return "";
    }
  }

  // training images
  function getTrainingImages(training){
    if(Object.keys(training).length){
      const images = []
      training?.tMaterials[0]?.tMaterialsData?.map((pic, i) => (
        images.push(<img src={`data:image/png;base64,${pic?.contentDownload}`} alt="" id="img" className="border-radius-10 cursor-pointer product_img" key={i} onClick={() => openModal(pic?.contentDownload)} />)
      ))

      return images
    }
  }

  // Open Modal
  function openModal(image) {
    setIsOpen(true);
    loadSelectedImage(image)
  }
  return (
    <div>
      <div className="flex flex-row justify-between gap-2 pb-2">
        <div>
          <div className="text-sm md:text-xl font-medium">
            Welcome to {training.topic} by <span className="link">{getTrainer(training.trainers?.trainers)}</span>
          </div>
        </div>
        <div className="w-1/2 md:w-20 md:float-right ">
          <div className="">
            <button type="button" className="bg-error back-btn rounded-lg text-white text-sm" onClick={goToPreviousPath}>
              <ArrowBackIcon fontSize="small" style={{ color: "white" }} />
              <span className="pt-0.5">Back</span>
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <CircularProgressLoader />
      ) : (
        <div>
          <div className="player-wrapper">
            {/* <div className="justify-center border-radius-10 min-height-50 h-full p-1 md:p-4 md:w-2/4" style={{width:"100px",height: '10%'}}> */}
            <ReactPlayer url={getVideoUrl(training)} width="100%" height="100%" className="react-player" />
            {/* </div> */}
          </div>
          <div className="flex flex-col md:flex-row  gap-4 pt-8 justify-between">
            <div className="bg-white border-radius-10 min-height-20vh courses-card-3 p-1 md:p-4 md:w-2/4 overflow-y-auto h-74">
              <div className="font-medium">
                <AccessTimeIcon className="text-xs" style={{ fontSize: "20px" }} />
                <span className="text-xs pl-2 text-slate-500">Duration {training.duration} Min</span>
              </div>
              <div className="text-base font-semibold pt-4">{training.topic}</div>
              <p className="text-xs text-slate-500 pt-2 pb-4">{training.description}</p>
              <p className="font-semibold text-sm text-slate-600">Meet your trainer(s)</p>
              <div>
                {training.trainers?.trainers?.map((trainer, index) => (
                  <span key={index}>
                    <div className="flex flex-row gap-8 pt-2 pb-3">
                      <img src={trainer_image} alt="" className="w-10 h-10 border-radius-50" />
                      <div className="text-sm pl-2 pt-4 font-semibold green">{getTrainerName(trainer)}</div>
                    </div>
                    {/* <div className="text-xs text-slate-500">
                  Nunc venenatis nisi non libero semper, vitae porta eros hendrerit. Nulla sed finibus sapien. Nulla rhoncus odio vel ullamcorper
                  vestibulum. text-xs text-slate-500
                </div> */}
                  </span>
                ))}
              </div>
              <p className="font-semibold text-sm text-slate-600 pt-2">Training Image(s)</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
                {getTrainingImages(training)}
              </div>
            </div>
            <div className="border-radius-10 min-height-20vh h-full md:w-1/2 overflow-y-auto h-80">
              <div
                className="bg-white border-radius-10 p-1 md:p-4 text-xs editor courses-card-2"
                dangerouslySetInnerHTML={createMarkup(training.notes)}
              >
              </div>
            </div>
          </div>
        </div>
      )}

      <CourseImages modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
// get the state
const mapStateToProps = state => ({
  training: state.trainings.training,
  isLoading: state.trainings.isLoading,
  t_category: state.trainings.training_category,
  trainers: state.trainings.trainers,
});

export default connect(mapStateToProps, { loadTraining, loadTrainingTrainers,loadSelectedImage })(withRouter(React.memo(CourseDetails)));
