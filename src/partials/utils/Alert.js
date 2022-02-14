import React,{useEffect, useRef, Fragment} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { tokenExpire } from '../../redux/actions/auth';


function Alert(props) {

    const ref = useRef();
    let error = ref.current = props.errors
    let message = ref.current = props.messages

    // Errors Alerts
    const { tokenExpire, history } = props;
    useEffect(() => {    
        if(error.status === 400 && !error.msg.message){
            toast.error("Failed! Something went wrong.");
        } else if(error.status === 403){
            tokenExpire()
            history.replace("/login")
            toast.error("Failed! Login to continue.");
        } else if(error.status === 500){
            toast.error("Failed! Something went wrong. Try again or check your internet connection.");
        }
        else if(error.status){
            toast.error(error.msg.message);
        }
    },[error, tokenExpire, history])

    // Success alerts

    useEffect(()=> {   
        
        if(Object.keys(message).length > 0 && message?.regionAdded){
            toast.success(message.regionAdded);
        } else if(Object.keys(message).length > 0 && message?.loginSuccess){
            toast.success(message.loginSuccess);
        }
    },[message])

    return (
        <Fragment>
            <ToastContainer />
        </Fragment>
    )
}
// get the state of user isAuthenticated
const mapStateToProps = state =>({
    errors:state.errors,
    messages: state.messages,
})
export default connect(mapStateToProps,{tokenExpire})(withRouter(Alert))
