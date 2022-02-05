import React,{useRef, useState} from "react";

import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../utils/TextValidator'
import Button from "../utils/Button";

function CreateCourses() {
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
                Upload a Course
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-8 justify-between pb-5">
        <div>
          <ValidatorForm ref={form} onSubmit={createCourse} autoComplete='off'>
            <div className="pt-2">
              <label htmlFor="" className="font-semibold text-sm">Name</label>
              <div className="pt-2">
                <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Course title" type="text" name="search" value={name} onChange={changename} validators={['required']}
                errorMessages={['Name is required']}/>
              </div>
            </div>

            <div className="pt-2">
              <label htmlFor="" className="font-semibold text-sm">Category</label>
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
              <label htmlFor="" className="font-semibold text-sm">Decription</label>
              <div className="pt-2">
                <textarea name="" id="" cols="30" rows="5" className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"></textarea>
              </div>
            </div>

            <div className="pt-2">
              <label htmlFor="" className="font-semibold text-sm">Upload Topic</label>
              <div className="pt-2">
                <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Upload video url" type="text" name="search" value={name} onChange={changename} validators={['required']}
                errorMessages={['Name is required']}/>
              </div>
            </div>

            {/* <div className="pt-2">
              <label htmlFor="" className="font-semibold">Course Includes</label>
              <div className="pt-2">
                <select className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3">
                  <option>Certificate</option>
                  <option>Fresha</option>
                  <option>Fresha</option>
                  <option>Fresha</option>
                </select>
              </div>
            </div> */}

            <div className="md:w-28 pt-8 float-right ">
              <Button type="button" class="bg-green success-btn rounded-md text-white m-auto text-sm" title="Save"/>
                {/* <input type="text" className="border-radius-10 py-0.5 text-sm border-slate-300 text-slate-500" placeholder="Search a topic" /> */}
            </div>

          </ValidatorForm>
        </div>
      </div>
    </div>
  );
}

export default CreateCourses;
