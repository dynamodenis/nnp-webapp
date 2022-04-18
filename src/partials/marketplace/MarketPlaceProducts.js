import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CreateProducts from "./products/CreateProducts";
import DeleteProduct from "./products/DeleteProduct";
import EditProduct from "./products/EditProduct";

import { connect } from "react-redux";
import { loadProductCategory } from "../../redux/actions/product_category";
import { loadVendors } from "../../redux/actions/vendors";
import { loadSmes } from "../../redux/actions/smes";
import { loadProducts } from "../../redux/actions/products";
import CircularProgressLoader from "../utils/CircularProgressLoader";
import NoDataFound from "../utils/NoDataFound";
import { canMarketplaceCreate,canMarketplaceView,canMarketplaceEdit,canMarketplaceDelete } from '../utils/Roles';

function MarketPlaceProducts(props) {
  let { loadProductCategory, loadVendors, loadSmes, loadProducts, products, isLoading, categories, vendors, smes, user } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsDeleteOpen, setIsDeleteOpen] = useState(false);
  const [edit, setEdit] = useState();
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [role, setRole] = useState("");
  const [productsList, setProductsList] = useState([]);

  // check if user is undefined
  if (user !== "undefined") {
    user = JSON.parse(user);
  } else {
    user = {};
  }

  const handleChangeRole = event => {
    // isLoading = true;
    if (event.target.value) {
      // console.log(event.target.value)
      const products_filtered = products?.filter(item => item.category === event.target.value);
      setProductsList(products_filtered);
      // isLoading = false
    } else {
      setProductsList(products);
    }
    // isLoading = false
    setRole(event.target.value);
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

  // Delte user
  function deleteItem(row) {
    setIsDeleteOpen(true);
    setEdit(row);
  }
  useEffect(() => {
    setEdit(edit);
  }, [edit]);

  useEffect(() => {
    loadProductCategory();
    loadVendors();
    loadSmes();
    loadProducts();
  }, []);

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  // console.log("products   ", products)

  function getImage(cat) {
    let imageList = cat?.pImage;
    let image = `data:image/png;base64,${imageList}`;
    return image;
  }

  // Get product category
  function getCategory(cat) {
    const category = categories?.filter(item => item.id === cat);
    if (category !== undefined) {
      return category[0]?.name || "";
    } else {
      return "";
    }
  }

  // Get product supplier
  function getSupplier(product) {
    let supplier = "Unknown";
    if (product.type === 1) {
      const sme = smes?.filter(item => item.id === product.supplier);
      if (sme !== undefined) {
        supplier = sme[0]?.name || "";
      }
    } else if (product.type === 2) {
      const vendor = vendors?.filter(item => item.id === product.supplier);
      if (vendor !== undefined) {
        supplier = vendor[0]?.name || "";
      }
    }

    return supplier;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div>
          <div className="text-2xl font-medium">
            Welcome, {user?.name}.
            <div className="text-sm link">Below is a list of available goods and services by our vendors and smes.</div>
          </div>
        </div>
        {canMarketplaceCreate(user) === true && 
          <div className="flex flex-col md:flex-row justify-between gap-2 md:justify-end md:w-1/2">
            <div className="">
              <button type="button" className="bg-blue add-user-btn  rounded-lg text-white text-sm" onClick={openModal}>
                <LocalGroceryStoreIcon fontSize="small" style={{ color:"white" }}/>
                <span className="pt-0.5">
                  Add Product
                </span>
              </button>
            </div>
            <div className="">
              <Link to="/marketplace/products/category">
                <button type="button" className="bg-blue add-user-btn rounded-lg text-white text-sm">
                  <AddIcon fontSize="small" style={{ color:"white" }}/>
                  <span className="pt-0.5">
                    Add Product Category
                  </span>
                </button>
              </Link>
            </div>
          </div>
        }
      </div>

      <div className="flex sm:flex-row justify-between gap-2 pt-2">
        <div className="font-semibold text-xs">
          <label htmlFor="" className="font-semibold text-sm">
            Filter by category
          </label>
          <div>
            <select
              className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md text-xs h-8"
              value={role}
              onChange={handleChangeRole}
              required
            >
              <option value="">Select All</option>
              {categories?.map((cat, i) => (
                <option key={i} value={cat.id} className="h-2">
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {isLoading ? (
        <CircularProgressLoader />
      ) : (
        <>
          {productsList.length === 0 ? (
            <div className="pt-8">
              <NoDataFound header="No Products Found" body="Products are currently not available" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              {productsList?.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300"
                >
                  <div className="flex flex-col rounded-md shadow-lg">
                    <div>
                      {/* <img src={user} alt="" className="h-40 w-full bg-cover bg-center"/> */}
                      <div
                        className="bg-contain bg-center h-52 w-full bg-no-repeat rounded-md"
                        style={{ backgroundImage: `url(${getImage(product)})` }}
                      ></div>
                    </div>
                    <div className="p-2">
                      <div className="text-md font-medium">{product.name}</div>
                      <div className="text-sm font-medium">Ksh {product.price_1}</div>
                      <div className="text-xs">
                        <span className="font-semibold">Category:</span>{" "}
                        <span className="font-normal">{getCategory(product.category)}</span>
                      </div>
                      {/* <div className="text-xs font-normal line-through">Ksh 1500</div> */}
                      <div className="text-xs">
                        <span className="font-semibold">Supplier:</span> <span className="font-normal">{getSupplier(product)}</span>
                      </div>
                    </div>

                    <div className="flex flex-row justify-center gap-2 pb-2 pt-2">
                      {canMarketplaceView(user) === true && 
                        <div>
                          <Link to={`/marketplace/product/details/${product.id}`}>
                            <button className="text-slate-500 text-xs view-button pl-4 pr-4 md:pr-2 md:pl-2 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300 w-full">
                              <VisibilityIcon fontSize="small" style={{fontSize:"20px",paddingRight:"5px" }}/>
                              <span className="pl-0.5">
                                View
                              </span>
                            </button>
                          </Link>
                        </div>
                      }

                      {canMarketplaceEdit(user) === true && 
                        <div>
                          <button className="text-slate-500 text-xs edit-button pl-4 pr-4 md:pr-2 md:pl-2 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={() => editItem(product)} >
                            <EditIcon fontSize="small" style={{fontSize:"20px",paddingRight:"5px" }}/>
                            <span className="pl-0.5">
                              Edit
                            </span>
                          </button>
                        </div>
                      }
                      {canMarketplaceDelete(user) === true && 
                        <div>
                          <button className="text-slate-500 text-xs delete-button pl-4 pr-4 md:pr-2 md:pl-2 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={()=>deleteItem(product)} >
                            <DeleteIcon fontSize="small" style={{fontSize:"20px",paddingRight:"5px" }}/>
                            <span className="pl-0.5">
                              Delete
                            </span>
                          </button>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <CreateProducts modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <EditProduct edit={edit} modalIsOpen={modalIsEditOpen} setIsOpen={setIsEditOpen} />
      <DeleteProduct edit={edit} modalIsOpen={modalIsDeleteOpen} setIsOpen={setIsDeleteOpen} />
    </div>
  );
}
// get the state
const mapStateToProps = state => ({
  categories: state.product_category.product_categories,
  isLoading: state.products.isLoading,
  products: state.products.products,
  vendors: state.vendors.vendors,
  smes: state.smes.smes,
  user: state.auth.user,
});
export default connect(mapStateToProps, { loadProductCategory, loadVendors, loadSmes, loadProducts })(React.memo(MarketPlaceProducts));
