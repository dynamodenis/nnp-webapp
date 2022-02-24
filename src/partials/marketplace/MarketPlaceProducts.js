import React,{useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import user from '../../images/rice.jpeg';
import CreateProducts from "./products/CreateProducts";
import DeleteProduct from "./products/DeleteProduct";
import EditProduct from "./products/EditProduct";

import { connect } from "react-redux";
import { loadProductCategory } from "../../redux/actions/product_category";
import { loadVendors } from "../../redux/actions/vendors";
import { loadSmes } from "../../redux/actions/smes";
import { loadProducts } from "../../redux/actions/products";

function MarketPlaceProducts(props) {
  const {loadProductCategory,loadVendors,loadSmes,loadProducts,products} = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsDeleteOpen, setIsDeleteOpen] = useState(false);
  const [edit, setEdit] = useState();
  const [modalIsEditOpen, setIsEditOpen] = useState(false);

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
    loadProductCategory()
    loadVendors()
    loadSmes()
    loadProducts()
  },[])

  console.log("products   ", products)

  function getImage(cat){
    let imageList = cat?.pImages
    let image = ""
    if(imageList?.length){
      image = `data:image/png;base64,${imageList[0]?.imageDownload}`
    }
    // console.log(image)
    return image
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Welcome, John Doe.
                <div className="text-sm link">
                  Below is a list of available goods and services by our vendors and smes.
                </div>
            </div>
        </div>
        <div className="flex flex-row gap-4 justify-between md:w-2/4">
          <div className="w-full">
            <button type="button" className="bg-blue add-user-btn rounded-md text-white text-sm md:w-full" onClick={openModal}>
              Add Product
            </button>
          </div>
          <div className="w-full">
            <Link to="/marketplace/products/category"><button type="button" className="bg-blue add-user-btn rounded-md text-white text-sm md:w-full" onClick={openModal}>
              Product categories
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row justify-between gap-2">
        <div>
          Filters
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
        {products?.map((product,index) => (
          <div key={index} className="bg-white border-radius-10 min-height-20vh cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-30 duration-300">
            <div className="flex flex-col rounded-md shadow-lg">
              <div>
                {/* <img src={user} alt="" className="h-40 w-full bg-cover bg-center"/> */}
                <div className="bg-cover bg-center h-52 w-full bg-no-repeat rounded-md" style={{backgroundImage: `url(${getImage(product)})`}}></div>
              </div>
              <div className="p-2">
                <div className="text-md font-medium">{product.name}</div>
                <div className="text-sm font-medium">Ksh 12000</div>
                <div className="text-xs font-normal line-through">Ksh 1500</div>
              </div>
              <div className="flex flex-row justify-center gap-2 pb-4">
                <div><Link to="/training/:id"><button className="text-slate-500 text-xs view-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">View</button></Link></div>
                <div><button className="text-slate-500 text-xs edit-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={() => editItem('training')} >Edit</button></div>
                <div><button className="text-slate-500 text-xs delete-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300" onClick={() => deleteItem('training')} >Delete</button></div>
              </div>
            </div>
          </div>
        ))}
      
      </div>

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
});
export default connect(mapStateToProps,{loadProductCategory,loadVendors,loadSmes,loadProducts})(React.memo(MarketPlaceProducts));
