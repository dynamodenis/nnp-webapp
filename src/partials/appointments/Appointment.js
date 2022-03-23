import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Grid } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// Forms
import CircularProgressLoader from "../utils/CircularProgressLoader";

// redux
import { connect } from "react-redux";
import { loadAppointments } from "../../redux/actions/appointments";
import { loadConsultants } from "../../redux/actions/consultants";
import { loadUsers } from '../../redux/actions/users';
// import CreateProductCategory from "./CreateProductCategory";
// import EditProductCategory from "./EditProductCategory";
// import DeleteProductCategory from "./DeleteProductCategory";
import NoDataFound from "../utils/NoDataFound";
import CreateAppointment from "./CreateAppointment";
import EditAppointment from "./EditAppointment";
import DeleteAppointment from "./DeleteAppointment";

// Tables CSS
const useStyles = makeStyles({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.1em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#f7d6d6",
    },
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});
function Appointment(props) {
  const classes = useStyles();
  const { isLoading, users, loadAppointments, appointments,loadConsultants,consultants,loadUsers } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsDeleteOpen, setIsDeleteOpen] = useState(false);
  const [edit, setEdit] = useState();
  const [modalIsEditOpen, setIsEditOpen] = useState(false);

  // Test Table Data
const columns = [
  { id: "name", label: "Topic", minWidth: 5 },
  { id: "consultant", label: "Consultant", minWidth: 5 },
  { id: "topic", label: "User", minWidth: 5 },
  { id: "time", label: "Time", minWidth: 5 },
  { id: "duration", label: "Duration", minWidth: 5 },
  { id: "status", label: "Status", minWidth: 5 },
  { id: "", label: "Actions", minWidth: 5 },
];


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    loadAppointments()
    loadConsultants()
    loadUsers()
  }, []);

  // Open Modal
  function openModal() {
    setIsOpen(true);
  }

  // edit function
  function editItem(row) {
    setIsEditOpen(true);
    setEdit(row);
  }

  // Delte user
  function deleteItem(row) {
    setIsDeleteOpen(true);
    setEdit(row);
  }
  useEffect(() => {
    setEdit(edit);
  }, [edit]);

  function getConsultant(consultant){
    const select = consultants?.filter( item => item.id === consultant)
    if(select.length){
      return select[0]?.name
    } else {
      return ""
    }
  }

  function getUser(user){
    const select = users?.filter( item => item.id === user)
    if(select.length){
      return select[0]?.name
    } else {
      return ""
    }
  }

  function getStatus(status){
    let value = "";
    if(status === 1){
      value = "Pending"
    } else if (status === 2){
      value = "Approved"
    }
    return value
  }
  console.log("appointments", appointments)
  return (
    <div className="survey_container">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
        <div className="">
          <div className="w-full py-1 text-xl font-semibold text-gray-500">Consultants Appointments</div>
        </div>

        <div className="flex flex-row gap-4 justify-between md:justify-end md:w-1/2">
          <div className="">
            <button type="button" className="bg-blue add-user-btn rounded-lg text-white text-sm" onClick={openModal}>
                <EventAvailableIcon fontSize="small" style={{ color:"white" }}/>
                <span className="pt-0.5 pl-0.5">
                  Create Appointment
                </span>
            </button>
          </div>
        </div>
      </div>
      {isLoading ? (
        <CircularProgressLoader />
      ) : (
        <>
          {appointments.length === 0 ? (
            <div className="pt-8">
              <NoDataFound />
            </div>
          ) : (
            <div className="survey_table pt-2">
              <TableContainer className={classes.container}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns.map(column => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className="bg-transparent"
                          style={{
                            minWidth: column.minWidth,
                            backgroundColor: "EEF0F3",
                            color: "rgb(71 85 105)",
                            fontWeight: "600",
                            letterSpacing: "0.0355rem",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            fontSize: "11pt",
                            zIndex: "1",
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointments?.length <= 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className={classes.table_cell_text}>
                          No data to display
                        </TableCell>
                      </TableRow>
                    ) : null}
                    {appointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index} style={{ zIndex: "0" }}>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row?.topic}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {getConsultant(row?.consultant)}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {getUser(row?.appuser)}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row?.stime}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {`${row?.duration} ${row?.dfactor}`}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {getStatus(row?.status)}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            <Grid container direction="row" alignItems="center" spacing={1}>
                              <Grid item>
                                <IconButton style={{ padding: 1, color: "#43D100", zIndex: "0" }} onClick={() => editItem(row)}>
                                  <VisibilityIcon fontSize="small" />
                                </IconButton>
                              </Grid>
                              <Grid item>
                                <IconButton style={{ padding: 1, color: "#FF5C5C" }} onClick={() => deleteItem(row)}>
                                  <DeleteIcon fontSize="small" />
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
                count={appointments.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          )}
        </>
      )}
      <CreateAppointment modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <EditAppointment edit={edit} modalIsOpen={modalIsEditOpen} setIsOpen={setIsEditOpen} />
      <DeleteAppointment edit={edit} modalIsOpen={modalIsDeleteOpen} setIsOpen={setIsDeleteOpen} /> 
      
    </div>
  );
}

// get the state
const mapStateToProps = state => ({
  categories: state.product_category.product_categories,
  isLoading: state.appointments.isLoading,
  appointments:state.appointments.appointments,
  consultants: state.consultants.consultants,
  users:state.users.users,
});

export default connect(mapStateToProps, { loadAppointments,loadConsultants,loadUsers })(React.memo(Appointment));
