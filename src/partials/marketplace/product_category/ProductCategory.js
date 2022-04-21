import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
import { useHistory } from "react-router-dom";

// Forms
// import DeleteUserModal from './DeleteUserModal';
import CircularProgressLoader from "../../utils/CircularProgressLoader";

// redux
import { connect } from "react-redux";
import { loadProductCategory } from "../../../redux/actions/product_category";
import CreateProductCategory from "./CreateProductCategory";
import EditProductCategory from "./EditProductCategory";
import DeleteProductCategory from "./DeleteProductCategory";
import NoDataFound from "../../utils/NoDataFound";

// Test Table Data
const columns = [
  { id: "name", label: "Name", minWidth: 5 },
  { id: "type", label: "Category type", minWidth: 5 },
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
function ProductCategory(props) {
  const classes = useStyles();
  const { isLoading, categories, loadProductCategory } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsDeleteOpen, setIsDeleteOpen] = useState(false);
  const [edit, setEdit] = useState();
  const [modalIsEditOpen, setIsEditOpen] = useState(false);

  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    loadProductCategory();
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
  return (
    <div className="survey_container">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
        <div className="">
          <div className="w-full py-1 text-xl font-semibold text-gray-500">Product Categories</div>
        </div>

        <div className="flex flex-row gap-4 justify-between md:justify-end md:w-1/2">
          <div className="">
            <button type="button" className="bg-primary-gray cancel-btn rounded-md text-white text-sm font-bold" onClick={goToPreviousPath}>
              <ArrowBackIcon fontSize="small" style={{ color:"white" }}/>
              <span className="pt-0.5">
                Back
              </span>
            </button>
          </div>
          <div className="">
            <button type="button" className="bg-primary-green add-user-btn rounded-md font-bold text-white text-sm" onClick={openModal}>
                <AddIcon fontSize="small" style={{ color:"white" }}/>
                <span className="pt-0.5">
                  Add Product Category
                </span>
            </button>
          </div>
        </div>
      </div>
      {isLoading ? (
        <CircularProgressLoader />
      ) : (
        <>
          {categories.length === 0 ? (
            <div className="pt-8">
              <NoDataFound header="No Product Categories Found" body="Product categories are currently not available" />
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
                    {categories?.length <= 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className={classes.table_cell_text}>
                          No data to display
                        </TableCell>
                      </TableRow>
                    ) : null}
                    {categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index} style={{ zIndex: "0" }}>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row?.name}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            {row.type === 1 ? "SME" : "Vendor"}
                          </TableCell>
                          <TableCell style={{ fontSize: "10pt", color: "rgb(71 85 105)", fontWeight: "400", letterSpacing: "0.0355rem" }}>
                            <Grid container direction="row" alignItems="center" spacing={1}>
                              <Grid item>
                                <IconButton style={{ padding: 1, color: "#50cd89", zIndex: "0" }} onClick={() => editItem(row)}>
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
                count={categories.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          )}
        </>
      )}
      <CreateProductCategory modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <EditProductCategory edit={edit} modalIsOpen={modalIsEditOpen} setIsOpen={setIsEditOpen} />
      <DeleteProductCategory edit={edit} modalIsOpen={modalIsDeleteOpen} setIsOpen={setIsDeleteOpen} />
    </div>
  );
}

// get the state
const mapStateToProps = state => ({
  categories: state.product_category.product_categories,
  isLoading: state.product_category.isLoading,
});

export default connect(mapStateToProps, { loadProductCategory })(React.memo(ProductCategory));
