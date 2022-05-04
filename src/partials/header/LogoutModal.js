import React,{useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { logout } from '../../redux/actions/auth';


function LogoutModal(props) {
    // On logout
    const logout = async (e) =>{
        e.preventDefault()

        try{
            await props.logout()
            props.setIsOpen(!props.modalIsOpen)
            toast.success("Logged out successfully.")
        }catch(error){
            console.log(error)
            toast.error("Logged out failed.")
        }
    }
    useEffect(() => {
        Modal.setAppElement('body');
    },[])

    if (!props.isAuthenticated){
        return <Redirect to="/login" />
    }
    
    return (
        <>
           {/* New order Modal */}
           <Modal
            isOpen={props.modalIsOpen}
            //   onAfterOpen={afterOpenModal}
            closeTimeoutMS={500}
            onRequestClose={() => props.setIsOpen(!props.modalIsOpen)}
            style={customStyles}
            contentLabel="Brand Modal"
            >

            <div className="flex flex-row justify-between">
                <span className="text-lg font-semibold">
                    Logout
                </span>
                <IconButton  style={{ padding: 2, color:"#FF5C5C"}} onClick={() => props.setIsOpen(!props.modalIsOpen)}>
                    <HighlightOffIcon fontSize="medium"/>
                </IconButton>
            </div>
            
            <div className="line"></div>
    
            
                <div className="create_brand">
                    <div className="flex flex-col">
                        <div className="text-center py-4">
                            Your account will be logged out!
                        </div>
                    </div>
                    
                    <div className="md:w-36 pt-8 md:float-right ">
                        <div className="grid grid-cols-2">
                            {/* <Link to="/users"> */}
                            <button type="button" className="bg-primary-gray cancel-btn shadow-slate-500 rounded-md text-white text-sm" onClick={() => props.setIsOpen(!props.modalIsOpen)}>Cancel</button>
                            {/* </Link> */}
                            <button type="button" className="bg-primary-green success-btn rounded-md text-white m-auto text-sm" onClick={logout}>Logout</button>
                        </div>
                    </div>
                    
                </div>
            
            </Modal> 
        </>
    )
}

const customStyles = {
    content : {
      top        : '50%',
      left       : '50%',
      right      : 'auto',
      bottom     : 'auto',
      marginRight: '-50%',
      transform  : 'translate(-50%, -50%)',
      width      : "50%",
      paddingTop :"10px",
      height     :"auto",
      
    },
    overlay:{
        backgroundColor:"rgba(31, 30, 30, 0.2)",
        
    }
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errors:state.errors,
    messages: state.messages,
})

export default connect(mapStateToProps, {logout})(LogoutModal)
