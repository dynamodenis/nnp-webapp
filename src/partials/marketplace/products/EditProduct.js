import React,{useRef, useState} from "react";
import Modal from "react-modal";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../../utils/TextValidator';
import SelectInput from "../../utils/SelectInput";
import SingleSelectInput from "../../utils/SingleSelectInput";

// Redux
import {connect} from 'react-redux';
import { addTraining } from "../../../redux/actions/training";

function EditProduct(props) {
  const form = useRef()
  const {isLoading,t_trainers, t_category, addTraining} = props;
  const [name, setname] = useState("")
  const [price, setPrice] = useState(0)
  const [units, setUnits] = useState("")
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [trainers, setTrainers] = useState('');
  const [description, setDescription] = useState('');
  const [selectPicture, setSelectPicture] = useState([]);
  const [selectPictureFormData, setSelectPictureFormData] = useState([]);
  
  const changename = event => {
      setname(event.target.value)
  }
  const changeType = event => {
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

  const createCourse = (e) =>{
    e.preventDefault()
    const body = {
      "category":category.value,
      "trainers":{"trainers": trainers?.map(trainer => trainer.value)},
      "type":parseInt(type),
      "description":description,
      "sel":0
    }
    var postData = JSON.stringify(body);
    let data = new FormData();
    // data.append('images', selectPictureFormData);
    selectPictureFormData.forEach(item => {
      // console.log("item")
      data.append('images', item);
     });
    data.append('training', postData);
    data.append('topic', name);
    // console.log("images",selectPictureFormData)
    // console.log("url", url)
    // console.log("topic", name)
    // console.log("training", postData)
    addTraining(data).then(res => {
      if(res === "success"){
        setname("")
        setCategory("")
        setType("")
        setTrainers("")
        setDescription("")
        setSelectPictureFormData([])
        setSelectPicture([])
        props.setIsOpen(!props.modalIsOpen)
      }
    })
  }


 function uploadImage(e) {
  var file = e.target.files[0]; 
   if (file) {
     var reader = new FileReader();

     reader.addEventListener("load", () => {
      setSelectPicture(selectPicture.concat(reader.result))
      setSelectPictureFormData(selectPictureFormData.concat(e.target.files[0]))
     });
     reader.readAsDataURL(file);
   }
 }

   // Select 2 users
  const cat_options = [];
  t_category['t-category']?.map( cat => {
    cat_options.push({
      value:cat.id,
      label:cat.name
    })
  })

  // Select 2 trainers
  const trainers_options = [];
  t_trainers?.map(trainer => {
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
                Edit a Product
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
                <label htmlFor="" className="font-semibold text-sm">Category</label>
                
                <div className="pt-2">
                  <SingleSelectInput onChange={handleCategory} options={cat_options} placeholder="Select product category.." value={category} />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Supplier Type</label>
                <div className="pt-2">
                    <select value={type} onChange={changeType}  className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm">
                        <option value="1">SME</option>
                        <option value="2">Vendor</option>
                    </select>
                  {/* <TextValidator className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Training duration" type="number" name="search" value={duration} onChange={changeType}/> */}
                </div>
              </div>

              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Trainers</label>
                <div className="pt-2">
                  <SelectInput onChange={handleTrainers} options={trainers_options} placeholder="Select Supplier.." value={trainers} isMulti/>
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
                    Training images
                </label>
                <div className="flex flex-col gap-8">
                  <div className="pt-2">
                    <input type="file" id="product_file_input" accept="image/*" onChange={uploadImage} hidden/>
                    <label htmlFor="product_file_input" title="Upload picture" className="product_file_input"> + Upload images</label>
                  </div>
                  {/* <div className="pl-10">
                      <img src={selectPicture[0]} alt="" id="img" className="product_img" />
                  </div> */}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-2">
                  {selectPicture.map((pic, i) => (
                    <img src={pic} alt="" id="img" className="product_img" key={i} />
                  ))}
                </div>
              
              </div>
            </div>

            <div className="md:w-36 pt-8 md:float-right ">
              <div className="grid grid-cols-2">
                <button type="button" className="bg-blue success-btn rounded-md text-white text-sm" onClick={() => props.setIsOpen(!props.modalIsOpen)}>
                  Back
                </button>
                {isLoading ? 
                  <button className='bg-green success-btn rounded-md text-white m-auto disabled:opacity-25' disabled>Loading...</button> :
                  <button type="submit" className="bg-green success-btn rounded-md text-white m-auto text-sm disabled:opacity-50" title="Save" disabled={!name || !category || !trainers}>Update</button>
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
  trainings:state.trainings.trainings,
  isLoading:state.trainings.isAdding,
  t_category:state.trainings.training_category,
  t_trainers:state.trainings.trainers
})

export default connect(mapStateToProps,{addTraining})(React.memo(EditProduct));
