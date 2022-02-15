import React,{useRef, useState} from "react";

import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../utils/TextValidator'
import Button from "../utils/Button";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';

function CreateUserForm() {
  const form = useRef()
  const [name, setname] = useState("")
  
  const changename = event => {
      setname(event.target.value)
  }

  const createCourse = (e) =>{
    e.preventDefault()

  }
  return (
    <div className="md:pl-8 md:pr-8">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
              Add User
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-8 justify-between pb-5">
        <div>
          <ValidatorForm ref={form} onSubmit={createCourse} autoComplete='off'>
            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Name</label>
                <div className="pt-2">
                  <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Course title" type="text" name="search" value={name} onChange={changename} validators={['required']}
                  errorMessages={['Name is required']}/>
                </div>
              </div>

              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Phone Number</label>
                <div className="pt-2">
                  <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Course title" type="text" name="search" value={name} onChange={changename} validators={['required']}
                  errorMessages={['Phone number is required']}/>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4 pt-2">
              <div className="pt-4">
                <FormControl>
                <label htmlFor="" className="font-semibold text-sm">User Type</label>
                <div className="ml-2">
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio size="small"/>} label="NNP user" style={{fontSize:"30px"}}/>
                    <FormControlLabel value="no" control={<Radio size="small"/>} label="General user" />
                  </RadioGroup>
                </div>
                </FormControl>
              </div>

              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Email Address</label>
                <div className="pt-2">
                  <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Course title" type="email" name="search" value={name} onChange={changename} validators={['isEmail']}
                  errorMessages={['Valid email is required']}/>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <label htmlFor="" className="font-semibold text-sm">User Roles</label>
              <div className="grid md:grid-cols-6 grid-cols-2 gap-4 md:gap-2 pt-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-semibold text-sm">Users</label>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can view</span>
                  </div>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can create</span>
                  </div>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can edit</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-semibold text-sm">Marketplace</label>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can view</span>
                  </div>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can create</span>
                  </div>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can edit</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-semibold text-sm">Trainings</label>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can view</span>
                  </div>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can create</span>
                  </div>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can edit</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-semibold text-sm">Consultancy</label>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can view</span>
                  </div>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can create</span>
                  </div>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can edit</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-semibold text-sm">Users</label>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can view</span>
                  </div>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can create</span>
                  </div>
                  <div>
                    <input type="checkbox" className="appearance-none checked:bg-blue-500 checkbox_size" /> <span className="text-sm">Can edit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-28 pt-8 md:float-right ">
              <div className="grid grid-cols-2">
                  <Link to="/users">
                  <button type="button" className="bg-blue success-btn rounded-md text-white text-sm">Back</button>
                </Link>
                  <button type="submit" className="bg-green success-btn rounded-md text-white m-auto text-sm" title="Save">Save</button>
              </div>
            </div>

          </ValidatorForm>
        </div>
      </div>
    </div>
  );
}

export default CreateUserForm;
