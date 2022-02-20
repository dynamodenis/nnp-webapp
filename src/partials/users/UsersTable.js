import React,{useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@mui/icons-material/Add';

// Forms
import DeleteUserModal from './DeleteUserModal';
import CircularProgressLoader from '../utils/CircularProgressLoader';

// redux
import {connect} from 'react-redux'
import CreateUserForm from './CreateUserForm';
import EditUserForm from './EditUserForm';



// Test Table Data
const columns = [
    { id: 'name', label: 'Name', minWidth: 5 },
    { id: 'number', label: 'Phone Number', minWidth: 5 },
    { id: 'email', label: 'Email', minWidth: 10},
    { id: 'role', label: 'Role', minWidth: 10},
    { id: 'type', label: 'Type', minWidth: 10},
    { id: '', label: 'Actions', minWidth: 5},
];
// Tables CSS
const useStyles = makeStyles({
    '@global': {
        '*::-webkit-scrollbar': {
          width: '0.1em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#f7d6d6',
        }
    },
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
});
function UsersTable(props) {
    const {isLoading, users,user_roles} = props;
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [modalIsOpen,setIsOpen] = useState(false);
    const [modalIsDeleteOpen,setIsDeleteOpen] = useState(false);
    const [edit, setEdit] = useState();
    const [modalIsEditOpen,setIsEditOpen] = useState(false);
    
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    // Open Modal
    function openModal() {
        setIsOpen(true);
    }

      // edit function
    function editItem(row){
        setIsEditOpen(true)
        setEdit(row);
    }

    // Delte user
    function deleteItem(row){
        setIsDeleteOpen(true)
        setEdit(row)
    }
    useEffect(() => {
        setEdit(edit)
    },[edit])

    // user type
    function getType(type_field){
        let type = "";
        if(parseInt(type_field) === 1){
            type = "Nnp user"
        } else if(parseInt(type_field) === 2){
            type = "SME"
        }else if(parseInt(type_field) === 3){
            type = "Farmer"
        }
        return type;
    }
    console.log(users)
    console.log("roles",user_roles)

    // Get role name
    function getRole(role_item){
        const selected_role = user_roles.filter(role => role.id = role_item)
        return selected_role[0]?.name
    }
    return (
        <div className="survey_container">
            <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
                <div className="">
                    <input type="text" className="w-full border-radius-10 py-1 text-sm border-slate-300 text-slate-500" placeholder="Search a user" />
                </div>

                <div className="w-full md:w-1/2">
                    <button type="button" className="bg-blue add-user-btn rounded-md text-white text-sm" onClick={openModal}>
                        <IconButton style={{ padding: 1.5, color:"white" }} className="text-white">
                            <AddIcon fontSize="small"/>
                        </IconButton>
                        Add User
                    </button>
                </div>
            </div>
            {isLoading ? 
                <CircularProgressLoader/> :    
                <div>
                    <div className="survey_table pt-4">
                        <TableContainer className={classes.container}>
                            <Table>
                                <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        className="bg-transparent"
                                        style={{ minWidth: column.minWidth,backgroundColor:'EEF0F3', color:"rgb(71 85 105)",fontWeight: "600",letterSpacing: "0.0355rem", paddingTop:"10px", paddingBottom:"10px",fontSize:"11pt",zIndex:"1" }}
                                    >
                                        {column.label}
                                    </TableCell>
                                    ))}
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                    return (
                                    
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index} style={{zIndex:"0"}}>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row?.name}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row?.phone}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row?.mail}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{getRole(row?.role)}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{getType(row?.type)}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>
                                            <Grid container direction="row" alignItems="center" spacing={1}>
                                                <Grid item >
                                                    <IconButton style={{ padding: 1, color:"#43D100",zIndex:"0" }} onClick={() => editItem(row)}>
                                                        <VisibilityIcon fontSize="small"/>
                                                    </IconButton>
                                                </Grid>
                                                <Grid item>
                                                    <IconButton style={{ padding: 1, color:"#FF5C5C" }} onClick={()=>deleteItem(row)}>
                                                        <DeleteIcon fontSize="small"/>
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                    );
                                })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={users.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                    <DeleteUserModal edit={edit} modalIsOpen={modalIsDeleteOpen} setIsOpen={setIsDeleteOpen}/>
                    <CreateUserForm modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
                    <EditUserForm edit={edit} modalIsOpen={modalIsEditOpen} setIsOpen={setIsEditOpen}/>
                </div>
            }
        </div>
    )
}

// get the state
const mapStateToProps = state =>({
  users:state.users.users,
  isLoading:state.users.isLoading,
  user_roles:state.users.user_roles
})
export default connect(mapStateToProps)(React.memo(UsersTable))

