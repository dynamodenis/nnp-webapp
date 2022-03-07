import React,{useRef, useState,useEffect} from "react";
import Modal from "react-modal";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../../utils/TextValidator';
import SelectInput from "../../utils/SelectInput";
import SingleSelectInput from "../../utils/SingleSelectInput";

// Redux
import {connect} from 'react-redux';
import { addProduct } from "../../../redux/actions/products";

function CreateProducts(props) {
  const form = useRef()
  const {isLoading,addProduct,categories,vendors,smes} = props;
  const [name, setname] = useState("")
  const [price, setPrice] = useState(0)
  const [units, setUnits] = useState("")
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [trainers, setTrainers] = useState('');
  const [description, setDescription] = useState('');
  const [selectPicture, setSelectPicture] = useState([]);
  const [selectPictureFormData, setSelectPictureFormData] = useState([]);
  const [selectFilterCategories, setSelectFilterCategories] = useState([]);
  const [selectFilterSuppliers, setSelectFilterSuppliers] = useState([]);
  
  const changename = event => {
      setname(event.target.value)
  }
  const changeType = event => {
    const cat = categories?.filter(cat => cat.type === parseInt(event.target.value))
    // filter suppliers
    if(event.target.value === '1'){
      // load smes
      setSelectFilterSuppliers(smes)
    } else if(event.target.value === '2'){
      setSelectFilterSuppliers(vendors)
    }
    setSelectFilterCategories(cat)
    setType(event.target.value)
  }

  const changePrice = event => {
    setPrice(event.target.value)
  }
  const changeUnits = event => {
    setUnits(event.target.value)
  }
  const changeDescription = event => {
    setDescription(event.target.value)
  }
  const handleCategory = rep => {
    setCategory(rep);
  };
  const handleTrainers = trainer => {
    setTrainers(trainer);
  };

  // Set categories
  useEffect(() => {
    setSelectFilterCategories(categories)
  },[categories])

  // Set supplier
  useEffect(() => {
    if(type === '2'){
      setSelectFilterSuppliers(selectFilterSuppliers.concat(vendors))
    }
    
  },[vendors])
  useEffect(() => {
    if(type === "1"){
      setSelectFilterSuppliers(selectFilterSuppliers.concat(smes))
    }
  },[smes])

  const createCourse = (e) =>{
    e.preventDefault()
    const body = {
        "name":name,
        "description":description,
        "sel":0,
        "category":category.value,
        "type":parseInt(type),
        "avwcost":parseFloat(price),
        "del":0,
        "frezze":0,
        "levy_1":"",
        "pack_1":0,
        "price_1":parseFloat(price),
        "supplier":trainers.value,
        "units_1":units,
        "vat_perc":0,
        "weight":0,
        "service":0
    }
    var postData = JSON.stringify(body);
    let data = new FormData();
    data.append('image', selectPictureFormData);
    data.append('product', postData);
    addProduct(data).then(res => {
      if(res === "success"){
        setname("")
        setCategory("")
        setType("")
        setTrainers("")
        setDescription("")
        setSelectPictureFormData("")
        setSelectPicture("")
        setUnits("")
        setPrice(0)
        props.setIsOpen(!props.modalIsOpen)
      }
    })
  }


 function uploadImage(e) {
  var file = e.target.files[0]; 
   if (file) {
     var reader = new FileReader();

     reader.addEventListener("load", () => {
      setSelectPicture(reader.result)
      setSelectPictureFormData(e.target.files[0])
     });
     reader.readAsDataURL(file);
   }
 }

   // Select 2 category
  const cat_options = [];
  selectFilterCategories?.map( cat => {
    cat_options.push({
      value:cat.id,
      label:cat.name
    })
  })

  // Select 2 trainers
  const trainers_options = [];
  selectFilterSuppliers?.map(trainer => {
    trainers_options.push({
      value:trainer.id,
      label:trainer.name
    })
  })
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
        <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Upload a Product
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-3 justify-between pb-5">
        <div>
          <ValidatorForm ref={form} onSubmit={createCourse} autoComplete='off'>
            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Product Name</label>
                <div className="pt-2">
                  <TextValidator className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Product name" type="text" name="search" value={name} onChange={changename} validators={['required']}
                  errorMessages={['Name is required']}/>
                </div>
              </div>
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Supplier Type</label>
                <div className="pt-2">
                    <select value={type} onChange={changeType}  className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" required>
                        <option value="" disabled>Select supplier type</option>
                        <option value="1">SME</option>
                        <option value="2">Vendor</option>
                    </select>
                  {/* <TextValidator className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Training duration" type="number" name="search" value={duration} onChange={changeType}/> */}
                </div>
              </div>
              
            </div>

            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Product Category</label>
                
                <div className="pt-2">
                  <SingleSelectInput onChange={handleCategory} options={cat_options} placeholder="Select product category.." value={category} />
                </div>
              </div>

              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Supplier</label>
                <div className="pt-2">
                  <SingleSelectInput onChange={handleTrainers} options={trainers_options} placeholder="Select Supplier.." value={trainers}/>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Price</label>
                <div className="pt-2">
                  <TextValidator className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Product/Service price" type="text" name="search" value={price} onChange={changePrice} validators={['required']}
                  errorMessages={['Price is required']}/>
                </div>
              </div>

              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Product units/ Service rate</label>
                
                <div className="pt-2">
                <TextValidator className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Product units/ Service rate" type="text" name="search" value={units} onChange={changeUnits} />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <label htmlFor="" className="font-semibold text-sm">Decription</label>
              <div className="pt-2">
                <textarea name="" id="" cols="30" rows="3" className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" value={description} onChange={changeDescription} required></textarea>
              </div>
            </div>

            <div className="justify-between flex flex-col gap-4 pt-2">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                    Product/Sevice image
                </label>
                <div className="flex flex-col gap-8">
                  <div className="pt-2">
                    <input type="file" id="product_file_input" accept="image/*" onChange={uploadImage} hidden/>
                    <label htmlFor="product_file_input" title="Upload picture" className="product_file_input"> + Upload images</label>
                  </div>
                  <div className="pl-10">
                      <img src={selectPicture} alt="" id="img" className="product_img" />
                  </div>
                </div>
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-2">
                  {selectPicture.map((pic, i) => (
                    <img src={pic} alt="" id="img" className="product_img" key={i} />
                  ))}
                </div> */}
              
              </div>
            </div>

            <div className="md:w-36 pt-8 md:float-right ">
              <div className="grid grid-cols-2">
                <button type="button" className="bg-blue success-btn rounded-md text-white text-sm" onClick={() => props.setIsOpen(!props.modalIsOpen)}>
                  Back
                </button>
                {isLoading ? 
                  <button className='bg-green success-btn rounded-md text-white m-auto disabled:opacity-25' disabled>Loading...</button> :
                  <button type="submit" className="bg-green success-btn rounded-md text-white m-auto text-sm disabled:opacity-50" title="Save" disabled={!name || !category || !trainers}>Save</button>
                }
              </div>
            </div>

          </ValidatorForm>
        </div>
      </div>
    </div>
      </Modal>
    </>
    
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    paddingTop: "10px",
    height: "auto",
  },
  overlay: {
    backgroundColor: "rgba(31, 30, 30, 0.2)",
  },
};

// get the state
const mapStateToProps = state =>({
  isLoading:state.products.isAdding,
  categories: state.product_category.product_categories,
  vendors:state.vendors.vendors,
  smes: state.smes.smes,
})

export default connect(mapStateToProps,{addProduct})(React.memo(CreateProducts));
