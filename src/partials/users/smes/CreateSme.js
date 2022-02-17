import React, { useRef, useState } from "react";

import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../../utils/TextValidator";

import { Link } from "react-router-dom";

// redux
import {connect} from 'react-redux'
import { addSmes } from '../../../redux/actions/smes';

function CreateSme(props) {
  const {isLoading,addSmes} = props;
  const form = useRef();
  const [name, setname] = useState("");
  const [contact, setContact] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [desc, setDesc] = useState("");  
  const [scounty, setSCounty] = useState(""); 

  const changename = event => {
    setname(event.target.value);
  };
  const changeContact = event => {
    setContact(event.target.value);
  };
  const changeTel = event => {
    setTel(event.target.value);
  };
  const changeMail = event => {
    setMail(event.target.value);
  };
  const changeAddress = event => {
    setAddress(event.target.value);
  };
  const changeTown = event => {
    setTown(event.target.value);
  };
  const changeDesc = event => {
    setDesc(event.target.value);
  };
  const changeCounty = event => {
    setSCounty(event.target.value);
  };



  const createCourse = e => {
    e.preventDefault();
    const body = {
      "name":name,
      "contact":contact,
      "address1":address,
      "tel": tel,
      "mail":mail,
      "town":town,
      "suspend":0,
      "sel":0,
      "descr":desc,
      "scounty":scounty,
      "location": {"x": 0, "y": 0},
    }
    addSmes(body).then(res => {
      if(res === 'success'){
        setname("")
        setContact("")
        setTel("")
        setMail("")
        setAddress("")
        setTown("")
        setDesc("")
        setSCounty("")
      }
    })
  };

  return (
    <div className="md:pl-8 md:pr-8">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
          <div className="text-2xl font-medium">Add SME</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-3 justify-between pb-5">
        <div>
          <ValidatorForm ref={form} onSubmit={createCourse} autoComplete="off">
            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Name
                </label>
                <div className="pt-2">
                    <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="SME's name"
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
                    className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                    placeholder="SME's contact name"
                    type="text"
                    name="search"
                    value={contact}
                    onChange={changeContact}
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
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="0720000000/+2547200000000"
                        type="text"
                        name="search"
                        value={tel}
                        onChange={changeTel}
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
                    className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                    placeholder="SME's contact email"
                    type="email"
                    name="search"
                    value={mail}
                    onChange={changeMail}
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
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="P.0 Box 1234-00100"
                        type="text"
                        name="search"
                        value={address}
                        onChange={changeAddress}
                    />
                </div>
              </div>
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Location/Town
                </label>
                <div className="pt-2">
                  <TextValidator
                    className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                    placeholder="Nairobi, Kenya"
                    type="text"
                    name="search"
                    value={town}
                    onChange={changeTown}
                  />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
              <div className="pt-2">
                <label htmlFor="" className="font-semibold text-sm">
                  Sub-county
                </label>
                <div className="pt-2">
                  <TextValidator
                    className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                    placeholder="Kasarani,Nairobi"
                    type="text"
                    name="search"
                    value={scounty}
                    onChange={changeCounty}
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
  isLoading:state.smes.isAdding,
})

export default connect(mapStateToProps, {addSmes})(React.memo(CreateSme));
