import React,{useState, useEffect, useMemo} from 'react'
import debounce from 'lodash.debounce';
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
import { canUsersCreate, canUsersEdit, canUsersDelete  } from '../utils/Roles';

// redux
import {connect} from 'react-redux'
import { loadUsers } from '../../redux/actions/users';
import CreateUserForm from './CreateUserForm';
import EditUserForm from './EditUserForm';
import NoDataFound from '../utils/NoDataFound';


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
    let {isLoading, users,loadUsers, user} = props;
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [modalIsOpen,setIsOpen] = useState(false);
    const [modalIsDeleteOpen,setIsDeleteOpen] = useState(false);
    const [edit, setEdit] = useState();
    const [modalIsEditOpen,setIsEditOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [usersList, setUsersList] = useState([])
    
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    // check if user is undefined
    if (user !== "undefined") {
        user = JSON.parse(user);
    } else {
        user = {};
    }

    // Test Table Header
    let columns = [
        { id: 'name', label: 'Name', minWidth: 5 },
        { id: 'number', label: 'Phone Number', minWidth: 5 },
        { id: 'email', label: 'Email', minWidth: 10},
        { id: 'role', label: 'Role', minWidth: 10},
        { id: 'type', label: 'Type', minWidth: 10},
        { id: '', label: 'Actions', minWidth: 5},
    ];

    if(!canUsersEdit(user)){
        columns.pop()
    }
    
    useEffect(() => {
        loadUsers()
    }, [])

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
            type = "SME/Vendor"
        }else if(parseInt(type_field) === 3){
            type = "Farmer"
        }
        return type;
    }

    // Get role name
    function getRole(role_item){
        let name = ""
        if(role_item === 'b854640e-3969-4989-a0bc-6ee513a9954c'){
            name = "Vendors"
        } else if(role_item === 'd25daf55-89d6-4e19-ba8b-824a988940c6'){
            name = "End user/Farmer"
        } else if(role_item === '91124c48-d8ac-11eb-b8bc-0242ac130003'){
            name = "Trainer"
        } else if(role_item === 'a24b72bb-c58c-412f-9d9d-8df266b1c89a'){
            name = "SME/Enterprises"
        } else if(role_item === '0d85902c-fba3-46fe-97a7-24e7d0d72dec'){
            name = "Administrator"
        }
        return name
    }

    // search 
    function searchUser(e){
        setSearch(e.target.value);
    }
    // preload users
    useEffect(() => {
        setUsersList(users)
    },[users])

    // Search usr
    let filtered_users = []
    if(search !== ""){
        
        filtered_users = usersList.filter(user => {
            let lowercase_name = user.name.toLowerCase()
            return lowercase_name.includes(search.toLowerCase())
        })
    }

    // check if filtered has value
    useEffect(() => {
        if(search !== ""){
            setUsersList(filtered_users)
        }else {
            setUsersList(users)
        }
    },[search])

    const debouncedResults = useMemo(() => {
        return debounce(searchUser, 500);
    }, []);

    useEffect(() => {
        return () => {
          debouncedResults.cancel();
        };
    });

    return (
        <div className="survey_container">
            <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
                <div className="">
                    <input type="text" onChange={debouncedResults} className="w-full border-radius-10 py-1 text-sm border-slate-300 text-slate-500" placeholder="Search a user" />
                </div>
                {canUsersCreate(user) && 
                    <div className="w-full md:w-1/2">
                        <button type="button" className="bg-primary-green add-user-btn rounded-md text-white text-sm" onClick={openModal}>
                            <AddIcon style={{ color:"white" }} fontSize="small"/>
                            <span className='pt-0.5'>
                                Add User
                            </span>
                        </button>
                    </div>
                }
            </div>
            {isLoading ? 
                <CircularProgressLoader/> :    
                <div>
                    { usersList.length === 0 ? <div className="pt-8"><NoDataFound/></div>
                    : <div className="survey_table pt-4">
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
                                {usersList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                    return (
                                    
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index} style={{zIndex:"0"}}>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row?.name}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row?.phone}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row?.mail}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{getRole(row?.role)}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{getType(row?.type)}</TableCell>
                                        {canUsersEdit(user) && 
                                            <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>
                                                <Grid container direction="row" alignItems="center" spacing={1}>
                                                    <Grid item >
                                                        <IconButton style={{ padding: 1, color:"#50cd89",zIndex:"0" }} onClick={() => editItem(row)}>
                                                            <VisibilityIcon fontSize="small"/>
                                                        </IconButton>
                                                    </Grid>
                                                    {canUsersDelete(user) && 
                                                        <Grid item>
                                                            <IconButton style={{ padding: 1, color:"#FF5C5C" }} onClick={()=>deleteItem(row)}>
                                                                <DeleteIcon fontSize="small"/>
                                                            </IconButton>
                                                        </Grid>
                                                    }
                                                </Grid>
                                            </TableCell>
                                        }
                                    </TableRow>
                                    );
                                })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={usersList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                    }
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
  user: state.auth.user,
})
export default connect(mapStateToProps, {loadUsers})(React.memo(UsersTable))

