import React, { useRef, useState } from "react";

import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../../utils/TextValidator";
import Button from "../../utils/Button";

import { Link } from "react-router-dom";


function CreateVendorForm() {
  const form = useRef();
  const [name, setname] = useState("");


  const changename = event => {
    setname(event.target.value);
  };


  const createCourse = e => {
    e.preventDefault();
  };

  return (
    <div className="md:pl-8 md:pr-8">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
          <div className="text-2xl font-medium">Add Vendor</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-8 justify-between pb-5">
        <div>
          <ValidatorForm ref={form} onSubmit={createCourse} autoComplete="off">
            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Name
                </label>
                <div className="pt-2">
                    <TextValidator
                        className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="Vendor's name"
                        type="text"
                        name="search"
                        value={name}
                        onChange={changename}
                        validators={["required"]}
                        errorMessages={["Name is required"]}
                    />
                </div>
              </div>
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Contact name
                </label>
                <div className="pt-2">
                  <TextValidator
                    className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                    placeholder="Vendor's contact name"
                    type="text"
                    name="search"
                    value={name}
                    onChange={changename}
                  />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Contact number
                </label>
                <div className="pt-2">
                    <TextValidator
                        className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="0720000000/+2547200000000"
                        type="text"
                        name="search"
                        value={name}
                        onChange={changename}
                        validators={["required"]}
                        errorMessages={["Contact number is required"]}
                    />
                </div>
              </div>
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Email address
                </label>
                <div className="pt-2">
                  <TextValidator
                    className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                    placeholder="Vendor's contact name"
                    type="email"
                    name="search"
                    value={name}
                    onChange={changename}
                    validators={["isEmail"]}
                    errorMessages={["Valid email is required"]}
                  />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Physical address
                </label>
                <div className="pt-2">
                    <TextValidator
                        className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="P.0 Box 1234-00100"
                        type="text"
                        name="search"
                        value={name}
                        onChange={changename}
                    />
                </div>
              </div>
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Location/Town
                </label>
                <div className="pt-2">
                  <TextValidator
                    className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                    placeholder="Nairobi, Kenya"
                    type="text"
                    name="search"
                    value={name}
                    onChange={changename}
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

export default CreateVendorForm;
