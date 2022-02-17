import React, { useRef, useState } from "react";

import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../../utils/TextValidator";
import SelectInput from "../../utils/SelectInput";

import { Link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// redux
import {connect} from 'react-redux'
import { addConsultant } from "../../../redux/actions/consultants";

function CreateConsultantForm(props) {
  const {isLoading, users, addConsultant} = props
  const form = useRef();
  const [name, setname] = useState("");
  const [salesRep, setSalesRep] = useState('');
  const [selectPicture, setSelectPicture] = useState("");
  const [selectPictureFormData, setSelectPictureFormData] = useState("");
  const [desc, setDesc] = useState("");  
  const [specialisation, setSpecialisation] = useState("");  
  const [portfolio, setPortfolio] = useState("");

  const changename = event => {
    setname(event.target.value);
  };
  const handleSalesRep = rep => {
    setSalesRep(rep);
  };
  const changeDesc = event => {
    setDesc(event.target.value);
  };

  const createCourse = e => {
    e.preventDefault();
    const body = {
      "name":name,
      "userId":salesRep.value,
      "pdescr":desc,
      "expertise": specialisation,
      "projects": portfolio
    }
    var postData = JSON.stringify(body);
    let data = new FormData();
    data.append('image', selectPictureFormData);
    data.append('consultant', postData);
    addConsultant(data).then( res => {
      if(res === "success"){
        setname("")
        setSalesRep("")
        setSelectPicture("")
        setSelectPictureFormData("")
        setDesc("")
        setSpecialisation("")
        setPortfolio("")
      }
    })
  };

  // Select 2 users
  const rep_options = [];
  users?.forEach((el) => {
    rep_options.push({
      value: el.id,
      label: el.name
    });
  })

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
    <div className="md:pl-8 md:pr-8">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
          <div className="text-2xl font-medium">Add Consultant</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-3 justify-between pb-5">
        <div>
          <ValidatorForm ref={form} onSubmit={createCourse} autoComplete="off">
            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Link User
                </label>
                <div className="pt-2">
                  <SelectInput onChange={handleSalesRep} options={rep_options} placeholder="Select User as Consultant.." value={salesRep} />
                </div>
              </div>
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Name
                </label>
                <div className="pt-2">
                  <TextValidator
                    className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                    placeholder="Consultant Username"
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
                  Description
                </label>
                <div className="pt-2">
                  <textarea name="" id="" cols="30" rows="5" className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border textarea-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" value={desc} onChange={changeDesc}></textarea>
                </div>
              </div>
            </div>

            <div className="justify-between flex flex-col gap-4 pt-2">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Expertise/Field of specialisation
                </label>
                <div className="pt-2">
                  <CKEditor
                      editor={ ClassicEditor }
                      data="<p>Type here!</p>"
                      onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          setSpecialisation(data)
                          console.log( { event, editor, data } );
                      } }
                  />
                </div>
              </div>
            </div>

            <div className="justify-between flex flex-col gap-4 pt-2">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Portfolio projects
                </label>
                <div className="pt-2">
                  <CKEditor
                      editor={ ClassicEditor }
                      data="<p>Type here!</p>"
                      onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          setPortfolio(data)
                          console.log( { event, editor, data } );
                      } }
                  />
                </div>
              </div>
            </div>

            <div className="justify-between flex flex-col gap-4 pt-2">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                    Consultant image
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
                <Link to="/users">
                  <button type="button" className="bg-blue success-btn rounded-md text-white text-sm">
                    Back
                  </button>
                </Link>
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
  );
}

// get the state
const mapStateToProps = state =>({
  consultants:state.consultants.consultants,
  isLoading:state.consultants.isAdding,
  users:state.users.users,
})


export default connect(mapStateToProps,{addConsultant})(React.memo(CreateConsultantForm));
