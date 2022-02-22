import React, { useRef, useState } from "react";

import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../../utils/TextValidator";
import Modal from "react-modal";

// redux
import {connect} from 'react-redux'
import { addTrainingCategory } from '../../../redux/actions/training_category';
function CreateTrainingCategory(props) {
  const {isLoading, users, addTrainingCategory} = props
  const form = useRef();
  const [name, setname] = useState("");
  const [eligible, setEligible] = useState('');
  const [selectPicture, setSelectPicture] = useState("");
  const [selectPictureFormData, setSelectPictureFormData] = useState("");
  const [desc, setDesc] = useState("");  

  const changename = event => {
    setname(event.target.value);
  };
  const changeEligible = event => {
    setEligible(event.target.value);
  };
  const changeDesc = event => {
    setDesc(event.target.value);
  };
  

  const createCourse = e => {
    e.preventDefault();
    const body = {
      "name":name,
      "eligible":eligible,
      "descr":desc,
      "sel":0
    }
    var postData = JSON.stringify(body);
    let data = new FormData();
    data.append('image', selectPictureFormData);
    data.append('tcategory', postData);
    addTrainingCategory(data).then( res => {
      if(res === "success"){
        setname("")
        setEligible("")
        setSelectPicture("")
        setSelectPictureFormData("")
        setDesc("")
        props.setIsOpen(!props.modalIsOpen)
      }
    })
  };

 function uploadImage(e) {
   var file = e.target.files[0]; 
    if (file) {
      var reader = new FileReader();

      reader.addEventListener("load", () => {
        setSelectPicture(reader.result)
        setSelectPictureFormData(e.target.files[0])
        // this.product.BATCH_IMG = e.target.result;
      });
      reader.readAsDataURL(file);
    }
  }

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
        <div className="md:pl-8 md:pr-8">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
          <div className="text-2xl font-medium">Add Training Category</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-3 justify-between pb-5">
        <div>
          <ValidatorForm ref={form} onSubmit={createCourse} autoComplete="off">
            <div className="md:grid md:grid-cols-1 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Name
                </label>
                <div className="pt-2">
                  <TextValidator
                    className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                    placeholder="Category name"
                    type="text"
                    name="search"
                    value={name}
                    onChange={changename}
                    validators={["required"]}
                    errorMessages={["Name is required"]}
                  />
                </div>
              </div>
            </div>

            <div className="justify-between flex flex-col gap-4 pt-2">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Description of the training
                </label>
                <div className="pt-2">
                  <textarea name="" id="" cols="30" rows="5" className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border textarea-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" value={desc} onChange={changeDesc}></textarea>
                </div>
              </div>
            </div>

            <div className="justify-between flex flex-col gap-4 pt-2">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Eligible people for this course
                </label>
                <div className="pt-2">
                  <textarea name="" id="" cols="30" rows="5" className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border textarea-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" value={eligible} onChange={changeEligible}></textarea>
                </div>
              </div>
            </div>

            <div className="justify-between flex flex-col gap-4 pt-2">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                    Training category profile image
                </label>
                <div className="flex flex-row gap-8">
                  <div className="pt-2">
                    <input type="file" id="product_file_input" accept="image/*" onChange={uploadImage} hidden/>
                    <label htmlFor="product_file_input" title="Upload picture" className="product_file_input"> + Profile image</label>
                  </div>
                  <div className="pl-10">
                      <img src={selectPicture} alt="" id="img" className="product_img" />
                  </div>
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
                  <button type="submit" className="bg-green success-btn rounded-md text-white m-auto text-sm" title="Save">Save</button>
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
  isLoading:state.training_category.isAdding,
})


export default connect(mapStateToProps,{addTrainingCategory})(React.memo(CreateTrainingCategory));
