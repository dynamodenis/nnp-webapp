import React,{useState, useEffect} from 'react'
import trainer_image from "../../images/default.jpg";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';


function UserProfile(props) {
    const user_id = props.match.params.id;
    const history = useHistory();
    const {consultants}  = props;
    const [consultant, setConsultant ] = useState({})
    console.log(user_id)
    const goToPreviousPath = () => {
        history.goBack()
    }

    function createMarkup(content){
        return { __html: content };
    }

    function checkImage(consultant){
        if(Object.keys(consultant).length && consultant?.consultantsProfileList.length){
            // return consultant?.consultantsProfileList[0]?.imageDownload
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
                    <button type="button" className="w-1/2 float-right bg-error back-btn rounded-md text-white text-sm" onClick={goToPreviousPath} >
                    Back
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  justify-start gap-4 bg-white min-height-8rem pt-4 pb-4 md:pt-0 md:pb-0'>
                <div className="flex flex-row gap-8 my-auto ml-4">
                    {checkImage(consultant) ? <img src={`data:image/png;base64,${consultant?.consultantsProfileList[0]?.imageDownload}`} alt="" className="w-20 h-20 border-radius-50" /> : <img src={trainer_image} alt="" className="w-20 h-20 border-radius-50" />}
                    <div className="text-sm font-semibold ">
                        <div className='link'>{consultant?.name}</div>
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

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-white min-height-8rem pt-4 pb-4 md:pt-0 md:pb-0'>
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
    )
}

// get the state
const mapStateToProps = state => ({
    consultants: state.consultants.consultants,
});

export default connect(mapStateToProps)(withRouter(React.memo(UserProfile)));