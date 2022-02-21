import React, { useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import trainer_image from "../../images/default.jpg";
import { withRouter } from "react-router";
import ReactPlayer from 'react-player/lazy'
import { useHistory } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { loadTraining } from "../../redux/actions/training";

function CourseDetails(props) {
  const training_id = props.match.params.training_id;
  const { loadTraining, isLoading, training, t_category, trainers } = props;

  let history = useHistory();
  const goToPreviousPath = () => {
      history.goBack()
  }

  useEffect(() => {
    loadTraining(training_id);
  }, [training_id]);
  console.log(training);

  // get trainer
  function getTrainer(items){
    let names = []
    items?.map(item_id => {
      const trainer = trainers?.filter(item => item.id === item_id)
      names.push(trainer[0]?.name)
    })
    return names.join(', ')
  }

  function createMarkup(content){
    return { __html: content };
  }
  // getTrainer name
  function getTrainerName(trainer_id){
    const trainer = trainers?.filter(item => item.id === trainer_id)
    console.log(trainer)
    return trainer[0]?.name
  }
  // video url
  function getVideoUrl(training){
    if(Object.keys(training).length){
      return training?.tMaterials[0]?.url
    } else {
      return "";
    }
  }
  return (
    <div>
      <div className="flex flex-row justify-between gap-2 pb-2">
        <div>
          <div className="text-sm md:text-xl font-medium">Welcome to Sample Course by <span className="link">{getTrainer(training.trainers?.trainers)}</span></div>
        </div>
        <div className="w-20 md:float-right ">
          <button type="button" className="bg-blue success-btn rounded-md text-white text-sm" onClick={goToPreviousPath}>Back</button>
        </div>
      </div>

      <div className="player-wrapper"> 
        {/* <div className="justify-center border-radius-10 min-height-50 h-full p-1 md:p-4 md:w-2/4" style={{width:"100px",height: '10%'}}> */}
         <ReactPlayer url={getVideoUrl(training)} width='100%'
          height='100%' className="react-player" />
        {/* </div> */}
      </div>
      <div className="flex flex-col md:flex-row  gap-4 pt-8 justify-between">
        <div className="bg-white border-radius-10 min-height-20vh courses-card-3 p-1 md:p-4 md:w-2/4 overflow-y-auto h-74">
          <div className="font-medium">
            <AccessTimeIcon className="text-xs" style={{ fontSize: "20px" }} />
            <span className="text-xs pl-2 text-slate-500">Duration {training.duration} Min</span>
          </div>
          <div className="text-base font-semibold pt-4">Sample Course A</div>
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
          
        </div>
        <div className="border-radius-10 min-height-20vh h-full md:w-1/2 overflow-y-auto h-80">
          <div className="bg-white border-radius-10 p-1 md:p-4 text-xs editor courses-card-2" dangerouslySetInnerHTML={createMarkup(training.notes)}></div>
        </div>
      </div>
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

export default connect(mapStateToProps, { loadTraining })(withRouter(React.memo(CourseDetails)));
