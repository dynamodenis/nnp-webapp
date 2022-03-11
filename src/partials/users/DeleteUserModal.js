import React,{useState, useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Modal from 'react-modal';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import {connect} from 'react-redux'
import {deleteUser} from '../../redux/actions/users'


function DeleteUserModal(props) {
    const {deleteUser,setIsOpen,modalIsOpen} = props;
    const classes = useStyles();
    const [selectId, setSelectId] = useState("");
    const [selectName, setSelectName] = useState("");



    // SUBMIT FORM
    const handleSubmit = event => {
        event.preventDefault();
        deleteUser(selectId).then((res) => {
            if(res === "success"){
                setIsOpen(!modalIsOpen)  
            }
        })
    }

    // Get name and the id
    useEffect(() => {
        setSelectName(props.edit?.name)
        setSelectId(props.edit?.id)
        Modal.setAppElement('body');
    },[props.edit])

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
                    Delete User
                </span>
                <IconButton  style={{ padding: 2, color:"#FF5C5C"}} onClick={() => props.setIsOpen(!props.modalIsOpen)}>
                    <HighlightOffIcon fontSize="small"/>
                </IconButton>
            </div>
            
            <div className="line"></div>
    
            <form onSubmit={handleSubmit}>
                <div className="create_brand">
                    <div className="brand_form_row0ne">
                        <div className="flex flex-col">
                            <div className="items-centre m-auto pt-2">
                                <DeleteIcon className={classes.deletebutton}/>
                            </div>
                            <div className="text-center py-4">
                                Are you sure you want to delete {selectName}?
                            </div>
                        </div>
                        
                    </div>

                    <div className="md:w-28 pt-8 md:float-right ">
                        <div className="grid grid-cols-2">
                            {/* <Link to="/users"> */}
                            <button type="button" className="bg-white cancel-btn shadow-slate-500 rounded-md text-gray-600 text-sm" onClick={() => props.setIsOpen(!props.modalIsOpen)}>Cancel</button>
                            {/* </Link> */}
                            {props.isLoading ? 
                                <button className='bg-dark-red delete-btn rounded-md text-white m-auto disabled:opacity-25' disabled>Loading...</button> :
                                <button type="submit" className="bg-dark-red delete-btn rounded-md text-white m-auto text-sm" title="Delete">Delete</button>
                            }
                        </div>
                    </div>
                    
                </div>
            </form>
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
      zIndex     :"100"
      
    },
    overlay:{
        backgroundColor:"rgba(31, 30, 30, 0.2)",
        
    }
};
const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    deletebutton: {
        fontSize:"5rem",
        backgroundColor:"white",
        color: "#D8355C",
        border: "1px solid rgb(175, 173, 173)",
        borderRadius:"30%"
    },

});
const mapStateToProps = state => {
    return{
        isLoading: state.users.isDeleting,
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         deleteUser: id => {
//         return dispatch(deleteUser(id))
//       },
//     };
//   };

export default connect(mapStateToProps, {deleteUser})(React.memo(DeleteUserModal))
