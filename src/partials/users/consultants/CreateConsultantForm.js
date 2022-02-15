import React, { useRef, useState } from "react";

import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../../utils/TextValidator";
import Button from "../../utils/Button";
import SelectInput from "../../utils/SelectInput";

import { Link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CreateConsultantForm() {
  const form = useRef();
  const [name, setname] = useState("");
  const [salesRep, setSalesRep] = useState('');
  const [selectPicture, setSelectPicture] = useState("");
  const [selectPictureFormData, setSelectPictureFormData] = useState("");

  const changename = event => {
    setname(event.target.value);
  };
  const handleSalesRep = rep => {
    setSalesRep(rep);
  };

  const createCourse = e => {
    e.preventDefault();
  };

  const rep_options = [
    {value: 0, label:"Never"},
    {value: 1, label:"Weekly"},
    {value: 2, label:"Fortnightly"},
    {value: 3, label:"Monthly"},
    {value: 4, label:"Yearly"}
 ]

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

      <div className="flex flex-col gap-4 pt-8 justify-between pb-5">
        <div>
          <ValidatorForm ref={form} onSubmit={createCourse} autoComplete="off">
            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Link User
                </label>
                <div className="pt-2">
                  <SelectInput onChange={handleSalesRep} options={rep_options} placeholder="Select Sales rep.." value={salesRep} />
                </div>
              </div>
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Name
                </label>
                <div className="pt-2">
                  <TextValidator
                    className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                    placeholder="Course title"
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
                  <textarea name="" id="" cols="30" rows="5" className="placeholder:text-slate-400 block bg-white w-full border textarea-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"></textarea>
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

            <div className="md:w-28 pt-8 md:float-right ">
              <div className="grid grid-cols-2">
                <Link to="/users">
                  <button type="button" className="bg-blue success-btn rounded-md text-white text-sm">
                    Back
                  </button>
                </Link>
                <Button type="button" class="bg-green success-btn rounded-md text-white m-auto text-sm" title="Save" />
              </div>
            </div>
          </ValidatorForm>
        </div>
      </div>
    </div>
  );
}

export default CreateConsultantForm;
