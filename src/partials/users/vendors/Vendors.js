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
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
// Form
import CircularProgressLoader from '../../utils/CircularProgressLoader';

// redux
import {connect} from 'react-redux'

// Test Table Data
const columns = [
    { id: 'name', label: 'Name', minWidth: 5 },
    { id: 'number', label: 'Phone Number', minWidth: 5 },
    { id: 'email', label: 'Email', minWidth: 5},
    { id: 'role', label: 'Town', minWidth: 5},
    { id: 'address', label: 'Address', minWidth: 5},
    { id: 'contact', label: 'Contact Number', minWidth: 5},
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
function Vendors(props) {
    const {isLoading, vendors} = props;
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [modalIsOpen,setIsOpen] = useState(false);
    const [modalIsDeleteOpen,setIsDeleteOpen] = useState(false);
    const [edit, setEdit] = useState();
    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    // Open Modal
    function openModal() {
        setIsOpen(true);
    }

    // selected user
    function handleSelectUser(user){
        // props.selectUser(user)
    }

    // Delte user
    function deleteItem(row){
        setIsDeleteOpen(true)
        setEdit(row)
    }
    useEffect(() => {
        setEdit(edit)
    },[edit])
    return (
        <div className="survey_container">
            <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
                <div className="">
                    <input type="text" className="w-full border-radius-10 py-1 text-sm border-slate-300 text-slate-500" placeholder="Search a vendor" />
                </div>

                <div className="w-full md:w-1/2">
                    <Link to="/users/vendor/create">
                    <button type="button" className="bg-blue add-user-btn rounded-md text-white text-sm">
                        <IconButton style={{ padding: 1.5, color:"white" }} className="text-white">
                            <AddIcon fontSize="small"/>
                        </IconButton>
                        Add Vendor
                    </button>
                    </Link>
                </div>
            </div>
            {isLoading ? 
                <CircularProgressLoader/> : 
                    <div className="survey_table pt-2">
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
                                {vendors?.length <= 0 ? <TableRow><TableCell colSpan={5} className={classes.table_cell_text}>No data to display</TableCell></TableRow> : null}
                                {vendors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                    return (
                                    
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index} style={{zIndex:"0"}}>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row.name}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row.tel}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row.mail}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row.town}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row.address1}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>{row.contact}</TableCell>
                                        <TableCell style={{fontSize:"10pt", color:"rgb(71 85 105)",fontWeight: "400",letterSpacing: "0.0355rem"}}>
                                            <Grid container direction="row" alignItems="center" spacing={1}>
                                                <Grid item >
                                                    <Link to="/users/edit/:id">
                                                        <IconButton style={{ padding: 1, color:"#43D100",zIndex:"0" }} onClick={() => handleSelectUser(row)}>
                                                            <VisibilityIcon fontSize="small"/>
                                                        </IconButton>
                                                    </Link>
                                                    
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
                            count={vendors.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                }
                {/* <DeleteUserModal edit={edit} modalIsOpen={modalIsDeleteOpen} setIsOpen={setIsDeleteOpen}/> */}
                {/* <surveyForm modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/> */}
                {/* <SurveyFrom modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/> */}
            
        </div>
    )
}

// get the state
const mapStateToProps = state =>({
    vendors:state.vendors.vendors,
    isLoading:state.vendors.isLoading,
})

export default connect(mapStateToProps)(React.memo(Vendors))

