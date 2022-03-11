import React, { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
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
import AddIcon from "@mui/icons-material/Add";

// Forms
// import DeleteUserModal from './DeleteUserModal';
import CircularProgressLoader from "../../utils/CircularProgressLoader";

// redux
import { connect } from "react-redux";
import DeleteSmeModal from "./DeleteSmeModal";
import CreateSme from "./CreateSme";
import EditSmeForm from "./EditSmeForm";
import NoDataFound from "../../utils/NoDataFound";

// Test Table Data
const columns = [
  { id: "name", label: "Name", minWidth: 5 },
  { id: "number", label: "Phone Number", minWidth: 5 },
  { id: "email", label: "Email", minWidth: 5 },
  { id: "role", label: "Town", minWidth: 5 },
  { id: "address", label: "Address", minWidth: 5 },
  { id: "contact", label: "Contact Number", minWidth: 5 },
  { id: "county", label: "Sub County", minWidth: 5 },
  { id: "", label: "Actions", minWidth: 5 },
];

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
function SMEs(props) {
  const classes = useStyles();
  const { isLoading, smes } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsDeleteOpen, setIsDeleteOpen] = useState(false);
  const [edit, setEdit] = useState();
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [smesList, setSmesList] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Open Modal
  function openModal() {
    setIsOpen(true);
  }

  // edit function
  function editItem(row) {
    setIsEditOpen(true);
    setEdit(row);
  }

  // search
  function searchSme(e) {
    setSearch(e.target.value);
  }

  // Delte user
  function deleteItem(row) {
    setIsDeleteOpen(true);
    setEdit(row);
  }
  useEffect(() => {
    setEdit(edit);
  }, [edit]);

  useEffect(() => {
    setSmesList(smes);
  }, [smes]);

  // Search smes
  let filtered_users = [];
  if (search !== "") {
    filtered_users = smesList.filter(user => {
      let lowercase_name = user.name.toLowerCase();
      return lowercase_name.includes(search.toLowerCase());
    });
  }

  // check if filtered has value
  useEffect(() => {
    if (search !== "") {
      setSmesList(filtered_users);
    } else {
      setSmesList(smes);
    }
  }, [search]);

  const debouncedResults = useMemo(() => {
    return debounce(searchSme, 500);
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
          <input
            type="text"
            onChange={debouncedResults}
            className="w-full border-radius-10 py-1 text-sm border-slate-300 text-slate-500"
            placeholder="Search a SMEs"
          />
        </div>

        <div className="w-full md:w-1/2">
          <button type="button" className="bg-blue add-user-btn rounded-md text-white text-sm" onClick={openModal}>
            <AddIcon style={{ color: "white" }} fontSize="small" />
            <span className="pt-0.5">
              Add Smes
            </span>
          </button>
        </div>
      </div>
      {isLoading ? (
        <CircularProgressLoader />
      ) : (
        <>
          {smesList.length === 0 ? (
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
                    {smesList?.length <= 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className={classes.table_cell_text}>
                          No data to display
                        </TableCell>
                      </TableRow>
                    ) : null}
                    {smesList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index} style={{ zIndex: "0" }}>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row?.name}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row?.tel}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row?.mail}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row?.town}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row?.address1}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row?.contact}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row?.scounty}
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
                count={smesList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          )}
        </>
      )}
      <DeleteSmeModal edit={edit} modalIsOpen={modalIsDeleteOpen} setIsOpen={setIsDeleteOpen} />
      <CreateSme modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <EditSmeForm edit={edit} modalIsOpen={modalIsEditOpen} setIsOpen={setIsEditOpen} />
    </div>
  );
}

// get the state
const mapStateToProps = state => ({
  smes: state.smes.smes,
  isLoading: state.smes.isLoading,
});

export default connect(mapStateToProps)(React.memo(SMEs));
