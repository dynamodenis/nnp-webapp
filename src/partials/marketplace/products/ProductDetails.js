import React,{useState, useEffect} from 'react'
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { loadProduct } from '../../../redux/actions/products';
import { loadProductCategory } from "../../../redux/actions/product_category";
import { loadVendors } from "../../../redux/actions/vendors";
import { loadSmes } from "../../../redux/actions/smes";
import CircularProgressLoader from '../../utils/CircularProgressLoader';

function ProductDetails(props) {
    const {loadProduct, loadProductCategory, loadVendors,isLoading, loadSmes, product, vendors, smes, categories} = props;
    const product_id = props.match.params.product_id;

    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    useEffect(() => {
        loadProduct(product_id);
        loadProductCategory()
        loadVendors()
        loadSmes()
    }, [product_id]);

    function getImage(cat){
      let imageList = cat?.pImage;
      let image = `data:image/png;base64,${imageList}`;
      return image;
    }

    // Get product category
  function getCategory(cat){
    const category = categories?.filter(item => item.id === cat)
    if(category !== undefined){
      
      return category[0]?.name || "";
    } else {
      return "";
    }
    
  }


  // Get product supplier
  function getSupplier(product){
    let supplier = "Unknown";
    if(product.type === 1){
      const sme = smes?.filter(item => item.id === product.supplier)
      if(sme !== undefined){
        supplier = sme[0]?.name || "";
      }
    }else if(product.type === 2){
      const vendor = vendors?.filter(item => item.id === product.supplier)
      if(vendor !== undefined){
        supplier = vendor[0]?.name || "";
      }
    }
    return supplier
  }

    // Get product supplier contat
    function getContact(product){
      let supplier = "Unknown";
      if(product.type === 1){
        const sme = smes?.filter(item => item.id === product.supplier)
        if(sme !== undefined){
          supplier = sme[0]?.tel || "";
        }
      }else if(product.type === 2){
        const vendor = vendors?.filter(item => item.id === product.supplier)
        if(vendor !== undefined){
          supplier = vendor[0]?.tel || "";
        }
      }
      return supplier
    }

    // Get product supplier
  function getEmail(product){
    let supplier = "Unknown";
    if(product.type === 1){
      const sme = smes?.filter(item => item.id === product.supplier)
      if(sme !== undefined){
        supplier = sme[0]?.mail || "";
      }
    }else if(product.type === 2){
      const vendor = vendors?.filter(item => item.id === product.supplier)
      if(vendor !== undefined){
        supplier = vendor[0]?.mail || "";
      }
    }
    return supplier
  }

    // Get product supplier contat
    function getLocation(product){
      let supplier = "Unknown";
      if(product.type === 1){
        const sme = smes?.filter(item => item.id === product.supplier)
        if(sme !== undefined){
          supplier = sme[0]?.town || "";
        }
      }else if(product.type === 2){
        const vendor = vendors?.filter(item => item.id === product.supplier)
        if(vendor !== undefined){
          supplier = vendor[0]?.town || "";
        }
      }
      return supplier
    }

    return (
        <div>
          {isLoading ? (
            <CircularProgressLoader/>
          ) : (
          <>
          <div className="grid grid-cols-2 pt-2 pb-2">
            <div></div>
            <div className="float-right">
                <button type="button" className="w-1/2 float-right bg-error back-btn rounded-md text-white text-sm" onClick={goToPreviousPath} >
                Back
                </button>
            </div>
          </div>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-between bg-white gap-4 h-screen md:min-height-60vh p-2">
                <div className="flex flex-col">
                    <div className="bg-contain bg-center h-5/6 w-full bg-no-repeat rounded-md m-auto" style={{backgroundImage: `url(${getImage(product)})`}}></div>
                </div>

                <div className="flex flex-col pt-4">
                    <div className="font-semibold text-lg">{product.name}</div>
                    <div className='h-0.5 bg-error w-8'></div>
                    <div className="text-sm font-medium pt-2">Ksh {product.price_1}</div>
                    <div className="text-xs"><span className="font-semibold">Category:</span> <span className="font-normal">{getCategory(product.category)}</span></div>
                    <div className='grid grid-cols-2 justify-start pt-2'>
                      <div className="text-xs"><span className="font-semibold">Supplier:</span> <span className="font-normal">{getSupplier(product)}</span></div> 
                      <div className="text-xs"><span className="font-semibold">Supplier contact:</span> <span className="font-normal">{getContact(product)}</span></div>
                      <div className="text-xs"><span className="font-semibold">Supplier email:</span> <span className="font-normal">{getEmail(product)}</span></div> 
                      <div className="text-xs"><span className="font-semibold">Supplier location:</span> <span className="font-normal">{getLocation(product)}</span></div>      
                    </div>
                    <div className="text-xs font-normal pt-2">{product.description}</div>
                </div>
            </div>
            </>
          )}
        </div>
    )
}

// get the state
const mapStateToProps = state => ({
    categories: state.product_category.product_categories,
    isLoading: state.products.isLoading,
    product: state.products.product,
    vendors:state.vendors.vendors,
    smes: state.smes.smes,
});

export default connect(mapStateToProps,{loadProduct,loadProductCategory ,loadVendors, loadSmes})(withRouter(React.memo(ProductDetails)));