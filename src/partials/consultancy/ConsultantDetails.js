import React,{useState, useEffect} from 'react'
import trainer_image from "../../images/default.jpg";
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';


function ConsultantDetails(props) {
    const consultant_id = props.match.params.id;
    const history = useHistory();
    const {consultants}  = props;
    const [consultant, setConsultant ] = useState({})
    
    const goToPreviousPath = () => {
        history.goBack()
    }


    useEffect(() => {
        const selected_consultant = consultants?.filter( consul => consul.id === consultant_id)
        if(selected_consultant.length > 0){
            setConsultant(selected_consultant[0])
        }else{
            console.log("consultant", selected_consultant)
            history.push("/consultancy");
        }
    },[consultant_id,consultants])

    function createMarkup(content){
        return { __html: content };
    }

    function checkImage(consultant){
        if(Object.keys(consultant).length){
            return consultant?.imageDownloads
            return true
        } else {
            return false;
        }
    }

    
    return (
        <div className='flex flex-col gap-4'>
            <div className="grid grid-cols-2 pt-2 pb-2">
                <div></div>
                <div className="float-right">
                     <button type="button" className="bg-primary-gray cancel-btn rounded-md text-white text-sm" onClick={goToPreviousPath}>
                        <ArrowBackIcon fontSize="small" style={{ color:"white" }}/>
                        <span className="pt-0.5 pl-0.5">
                            Back
                        </span>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-4'>
                <div className='grid grid-cols-1  justify-start gap-4 bg-white min-height-8rem pt-4 pb-4 md:pt-0 md:pb-0'>
                    <div className="flex flex-col gap-8 my-auto ml-4">
                        {checkImage(consultant) ? <img src={`data:image/png;base64,${consultant?.imageDownloads}`} alt="" className="w-60 h-60 border-radius-50 m-auto" /> : <img src={trainer_image} alt="" className="w-20 h-20 border-radius-50" />}
                        <div className="text-sm font-semibold ">
                            <div className='badge badge_light_green text-2xl'>{consultant?.name}</div>
                            <div className="text-xs font-normal flex flex-row hover:text-gray-600 gap-4 pt-2">
                                <div><WorkIcon style={{ fontSize:"1rem"}} /></div>
                                <div>{consultant?.title || "No title"}</div>
                            </div>
                            <div className="text-xs font-normal flex flex-row hover:text-gray-600 gap-4 pt-2">
                                <div><PhoneIcon style={{ fontSize:"1rem"}} /></div>
                                <div>{consultant.phone || "No phone number"}</div>
                            </div>
                            <div className="text-xs font-normal flex flex-row hover:text-gray-600 gap-4 pt-2">
                                <div><MailOutlineIcon style={{ fontSize:"1rem"}} /></div>
                                <div>{consultant.email || "No email"}</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 ml-4 text-sm">
                        {consultant?.pdescr}
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 gap-4 bg-white min-height-8rem pt-4 pb-4 md:pt-0 md:pb-0 overflow-y-auto'>
                    <div className="flex flex-col ml-4">
                        <div className='font-semibold underline pt-2 pb-2'>Experitise</div>
                        <div className='font-normal text-sm pb-2' dangerouslySetInnerHTML={createMarkup(consultant?.expertise)} ></div>
                    </div>
                    <div className="flex flex-col ml-4">
                        <div className='font-semibold underline pt-2 pb-2'>Projects</div>
                        <div className='font-normal text-sm pb-2' dangerouslySetInnerHTML={createMarkup(consultant?.projects)} ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// get the state
const mapStateToProps = state => ({
    consultants: state.consultants.consultants,
});

export default connect(mapStateToProps)(withRouter(React.memo(ConsultantDetails)));