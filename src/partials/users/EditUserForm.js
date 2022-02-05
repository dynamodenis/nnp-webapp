import React,{useRef, useState} from "react";

import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../utils/TextValidator'
import Button from "../utils/Button";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';

function EditUserForm() {
  const form = useRef()
  const [name, setname] = useState("")
  
  const changename = event => {
      setname(event.target.value)
  }

  const createCourse = (e) =>{
    e.preventDefault()

  }
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
              Edit User
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
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Role</label>
                <div className="pt-2">
                  <select className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm">
                    <option>Fresha</option>
                    <option>Fresha</option>
                    <option>Fresha</option>
                    <option>Fresha</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">Email Address</label>
                <div className="pt-2">
                  <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Course title" type="email" name="search" value={name} onChange={changename} validators={['isEmail']}
                  errorMessages={['Valid email is required']}/>
                </div>
              </div>
            </div>

            <div className="pt-4">
              
              <FormControl>
              <label htmlFor="" className="font-semibold text-sm">Activate/Deactivate User</label>
              <div className="ml-2">
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </div>
              </FormControl>
            </div>

            <div className="md:w-36 pt-8 md:float-right ">
              <div className="grid grid-cols-2">
                  <Link to="/users">
                  <button type="button" className="bg-blue success-btn rounded-md text-white text-sm">Back</button>
                </Link>
                  <Button type="button" class="bg-green success-btn rounded-md text-white m-auto text-sm pr-2 pl-2" title="Update"/>
              </div>
            </div>

          </ValidatorForm>
        </div>
      </div>
    </div>
  );
}

export default React.memo(EditUserForm);
