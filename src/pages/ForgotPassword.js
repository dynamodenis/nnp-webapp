import React, { useState,useRef } from "react";
import login_pic from "../images/login-logo.png";
import logo from "../images/logo.jpeg";
import Button from "../partials/utils/Button";
import { useHistory, Redirect } from "react-router-dom";

import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../partials/utils/TextValidator'
import Vector from '../images/Vector.png';

// Redux
import { connect } from "react-redux";
import { resetPassword } from "../redux/actions/users";

function ForgotPassword(props) {
  let { resetingPassword,resetPassword } = props;
  const form = useRef()
  const history = useHistory();
  const [phone, setPhone] = useState("");
  const [otpTo, setOtpTo] = useState("")
  const [mail, setEmail] = useState("")

  const changePhone = event => {
    setPhone(event.target.value);
  };
  const changeOtpTo = event => {
    setOtpTo(event.target.value)
  }
  const changeEmail = event => {
    setEmail(event.target.value)
  }
  
  const reset_Password = e => {
    e.preventDefault()
    let data = (otpTo === "1") ? phone : (otpTo === "2") ? mail : "";
    resetPassword(data, otpTo).then( res => {
        if(res === "success"){
            history.push("/login");
        }     
    })
  }

  if (props.isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <div className="flex flex-row justify-between h-screen bg-white">
        <div className="flex flex-col sm:m-auto border-radius-10 login-form">
          <div className="login-form-container min-w-full min-h-max">
            <div className="flex justify-center item-center pt-1">
              <img src={logo} alt="" className="w-20 pt-1 pb-1" />
            </div>
            <ValidatorForm ref={form} onSubmit={reset_Password} autoComplete="off">
              <div className="flex flex-col gap-3 items-center login-fields">
                <div>
                  <label htmlFor="phone" className='text-sm'>Send Temporary Password To</label>
                      <label className="relative block text-sm md:text-base">
                      <div className="">
                          <select name="" id="" value={otpTo} onChange={changeOtpTo} className="text_inputs--pl block bg-white width-17rem border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" required>
                              <option value="" className="text-slate-400">Select option</option>
                              <option value="1" className="text-slate-400">Phone Number</option>
                              <option value="2" className="text-slate-400">Email Adress</option>
                          </select>
                      </div>
                  </label>
                </div>

                { otpTo === "1" && <div className="login-fields__div">
                    <label htmlFor="phone" className="text-sm">
                      Enter your phone number.
                    </label>
                      <label className="relative block text-sm md:text-base pt-2">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                              <i className="fa fa-phone h-5 w-5 fill-slate-100 pt-1"></i>
                          </span>
                          <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="+254700000000" type="text" name="search" value={phone} onChange={changePhone} validators={['required']} errorMessages={['Phone number is required']}/>
                      </label>
                  </div>
                }

                { otpTo === "2" && <div>
                    <label htmlFor="phone" className='text-sm'>Email</label>
                        <label className="relative block text-sm md:text-base width-17rem">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <img src={Vector} alt="" className="h-5 w-5 fill-slate-300"/>
                        </span>
                        <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="example@gmail.com" type="email" name="search" value={mail} onChange={changeEmail} />
                    </label>
                  </div>
                }
              </div>
              <div>
                <div className="btn-container flex flex-row m-auto pt-4">
                  {resetingPassword ? (
                    <button className="bg-primary-green success-btn rounded-md text-white m-auto disabled:opacity-75 font-bold " disabled>
                      Loading...
                    </button>
                  ) : (
                    <Button type="submit" class="bg-primary-green success-btn rounded-md text-white m-auto font-bold " disabled={!phone} title="Reset Password" />
                  )}
                </div>
              </div>
            </ValidatorForm>
          </div>
        </div>
        <div className="sm_display_none">
          <img src={login_pic} alt="Login" className="h-screen w-50vh" />
        </div>
      </div>
    </>
  );
}

// get the state of user isAuthenticated
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors,
  messages: state.messages,
  isLoading: state.auth.isLoading,
  registration: state.auth.registration,
  resetingPassword: state.users.isResetting,
});

export default connect(mapStateToProps, { resetPassword })(ForgotPassword);
